"use client";

import {
  getShoppingVideos,
  getShoppingImages,
  getShoppingAudios,
} from "@/app/api";
import { useState } from "react";
import { useRequest } from "@/hooks";
import SliderTabs from "@/components/SliderTabs";
import Products from "@/components/Shopping/Products";
import ShoppingLayout from "@/components/Shopping/Layout";

import { ENUM_SHOPPING_TYPE } from "@/components/Shopping/Products";

const PRODUCT_TYPES = [
  { key: ENUM_SHOPPING_TYPE.VIDEO, label: "视频" },
  { key: ENUM_SHOPPING_TYPE.IMAGE, label: "图片" },
  { key: ENUM_SHOPPING_TYPE.AUDIO, label: "音乐" },
];

const Page = () => {
  const [type, setType] = useState<ENUM_SHOPPING_TYPE>(
    ENUM_SHOPPING_TYPE.VIDEO,
  );

  const { data } = useRequest(
    async () => {
      const [videos, images, audios] = await Promise.all([
        getShoppingVideos(),
        getShoppingImages(),
        getShoppingAudios(),
      ]);
      return {
        [ENUM_SHOPPING_TYPE.VIDEO]: videos.data,
        [ENUM_SHOPPING_TYPE.IMAGE]: images.data,
        [ENUM_SHOPPING_TYPE.AUDIO]: audios.data,
      };
    }
  );

  console.log("@-data", data);

  return (
    <ShoppingLayout>
      <SliderTabs
        value={type}
        items={PRODUCT_TYPES}
        onChange={(e) => setType(e as ENUM_SHOPPING_TYPE)}
      />
      <Products type={type} items={data?.[type]} />
    </ShoppingLayout>
  );
};

export default Page;
