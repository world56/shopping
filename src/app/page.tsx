"use client";

import {
  getShoppingVideos,
  getShoppingImages,
  getShoppingAudios,
  getVideoPurchaseRecords,
  getImagePurchaseRecords,
  getAudioPurchaseRecords,
} from "@/app/api";
import {
  getProductListMap,
  formatProductPurchaseRecord,
} from "@/utils/product";
import Decimal from "decimal.js";
import { useRequest } from "@/hooks";
import { useMemo, useState } from "react";
import SliderTabs from "@/components/SliderTabs";
import Payment from "@/components/Shopping/Payment";
import Products from "@/components/Shopping/Products";
import ShoppingLayout from "@/components/Shopping/Layout";

import { ENUM_SHOPPING_TYPE } from "@/components/Shopping/Products";

import type { TypeProduct } from "@/interface/product";
import type { TypeProductProps } from "@/components/Shopping/Products";

const Page = () => {
  const [type, setType] = useState<ENUM_SHOPPING_TYPE>(
    ENUM_SHOPPING_TYPE.VIDEO,
  );

  const [select, setSelect] = useState<TypeProductProps["selected"]>({
    [ENUM_SHOPPING_TYPE.VIDEO]: {},
    [ENUM_SHOPPING_TYPE.IMAGE]: {},
    [ENUM_SHOPPING_TYPE.AUDIO]: {},
  });

  // 购物车记录
  const { data, setData } = useRequest(async () => {
    const [videos, images, audios] = await Promise.all([
      getShoppingVideos(),
      getShoppingImages(),
      getShoppingAudios(),
    ]);
    const videoData = getProductListMap(videos.data, ENUM_SHOPPING_TYPE.VIDEO);
    const imageData = getProductListMap(images.data, ENUM_SHOPPING_TYPE.IMAGE);
    const audiosData = getProductListMap(audios.data, ENUM_SHOPPING_TYPE.AUDIO);
    return {
      [ENUM_SHOPPING_TYPE.VIDEO]: videoData,
      [ENUM_SHOPPING_TYPE.IMAGE]: imageData,
      [ENUM_SHOPPING_TYPE.AUDIO]: audiosData,
    };
  });

  // 是否购买过记录
  const { data: purchase } = useRequest(async () => {
    const [videos, images, audios] = await Promise.all([
      getVideoPurchaseRecords(),
      getImagePurchaseRecords(),
      getAudioPurchaseRecords(),
    ]);
    return {
      [ENUM_SHOPPING_TYPE.VIDEO]: formatProductPurchaseRecord(
        videos.data,
        ENUM_SHOPPING_TYPE.VIDEO,
      ),
      [ENUM_SHOPPING_TYPE.IMAGE]: formatProductPurchaseRecord(
        images.data,
        ENUM_SHOPPING_TYPE.IMAGE,
      ),
      [ENUM_SHOPPING_TYPE.AUDIO]: formatProductPurchaseRecord(
        audios.data,
        ENUM_SHOPPING_TYPE.AUDIO,
      ),
    };
  });

  function onSelect(id: number) {
    setSelect((e) => ({
      ...e,
      [type]: {
        ...e[type],
        [id]: e[type][id] ? undefined : data?.[type].map[id],
      },
    }));
  }

  function onAllSelect(all: boolean) {
    setSelect({
      [ENUM_SHOPPING_TYPE.VIDEO]: all
        ? {}
        : data?.[ENUM_SHOPPING_TYPE.VIDEO].map!,
      [ENUM_SHOPPING_TYPE.IMAGE]: all
        ? {}
        : data?.[ENUM_SHOPPING_TYPE.IMAGE].map!,
      [ENUM_SHOPPING_TYPE.AUDIO]: all
        ? {}
        : data?.[ENUM_SHOPPING_TYPE.AUDIO].map!,
    });
  }

  function onDelete(i: number) {
    if (data) {
      const id = data[type].list[i].id;
      data![type].map[id!] = undefined;
      data![type].list.splice(i, 1);
      setData({ ...data });
      select[type][id!] = undefined;
      setSelect({ ...select });
    }
  }

  // 统计
  const total = useMemo(() => {
    if (data) {
      let price = new Decimal(0);
      const total = Object.values(data!).reduce((l, r) => l + r.list.length, 0);
      const selectedTotal = Object.values(select)
        .flatMap(Object.values)
        .filter((v: TypeProduct.DTO) => {
          price = price.plus(new Decimal(v?.price || 0));
          return Boolean(v);
        }).length;
      return { price: price.toNumber(), total, selectedTotal };
    } else {
      return { price: 0, total: 0, selectedTotal: 0 };
    }
  }, [data, select]);

  function onSubmit() {
    console.log("@-总价格", total.price);
    console.log("@-视频", data?.[ENUM_SHOPPING_TYPE.VIDEO].list);
    console.log("@-图片", data?.[ENUM_SHOPPING_TYPE.IMAGE].list);
    console.log("@-音乐", data?.[ENUM_SHOPPING_TYPE.AUDIO].list);
  }

  const TABS = useMemo(
    () => [
      {
        label: `视频 ${data?.[ENUM_SHOPPING_TYPE.VIDEO]?.list?.length}`,
        key: ENUM_SHOPPING_TYPE.VIDEO,
      },
      {
        key: ENUM_SHOPPING_TYPE.IMAGE,
        label: `图片 ${data?.[ENUM_SHOPPING_TYPE.IMAGE]?.list?.length}`,
      },
      {
        key: ENUM_SHOPPING_TYPE.AUDIO,
        label: `音乐 ${data?.[ENUM_SHOPPING_TYPE.AUDIO]?.list?.length}`,
      },
    ],
    [data],
  );

  return (
    <ShoppingLayout>
      <SliderTabs
        value={type}
        items={TABS}
        onChange={(e) => setType(e as ENUM_SHOPPING_TYPE)}
      />
      <Products
        type={type}
        onDelete={onDelete}
        onChange={onSelect}
        items={data?.[type].list}
        selected={select}
        purchase={purchase?.[type]}
      />
      <Payment {...total} onSelect={onAllSelect} onSubmit={onSubmit} />
    </ShoppingLayout>
  );
};

export default Page;
