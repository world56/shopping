import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import { CONSTANT_PRODUCT } from "@/constant/product";

import type { TypeProduct } from "@/interface/product";
import { InboxOutlined } from "@ant-design/icons";

/**
 * @name ENUM_SHOPPING_TYPE 购物车对应产品素材的三种类型
 */
export enum ENUM_SHOPPING_TYPE {
  VIDEO,
  IMAGE,
  AUDIO,
}

/**
 * @name PRODUCT_PRIMARY_KEY 素材产品对应的主键
 */
export const PRODUCT_PRIMARY_KEY = {
  [ENUM_SHOPPING_TYPE.VIDEO]: "vid",
  [ENUM_SHOPPING_TYPE.IMAGE]: "fid",
  [ENUM_SHOPPING_TYPE.AUDIO]: "mid",
};

type TypeProductDTO =
  | TypeProduct.VideoDTO
  | TypeProduct.ImageDTO
  | TypeProduct.AudioDTO;

export interface TypeProductProps {
  /**
   * @param type 产品对应的类型
   * @description 根据这个来选择对应的主键ID
   */
  type: ENUM_SHOPPING_TYPE;
  /**
   * @param purchase 购买匹配记录
   */
  purchase?: Record<string, boolean>;
  /**
   * @param items 产品列表
   */
  items?: Array<TypeProductDTO>;
  onChange(id: number): void;
  onDelete(id: number): void;
  selected: {
    [ENUM_SHOPPING_TYPE.VIDEO]: Record<
      string,
      TypeProduct.VideoDTO | undefined
    >;
    [ENUM_SHOPPING_TYPE.IMAGE]: Record<
      string,
      TypeProduct.ImageDTO | undefined
    >;
    [ENUM_SHOPPING_TYPE.AUDIO]: Record<
      string,
      TypeProduct.AudioDTO | undefined
    >;
  };
}

/**
 * @name Products 产品详情
 */
const Products: React.FC<TypeProductProps> = ({
  type,
  items,
  purchase,
  selected,
  onChange,
  onDelete,
}) => {
  function getProductType(v: TypeProductDTO) {
    switch (type) {
      case ENUM_SHOPPING_TYPE.VIDEO:
        return CONSTANT_PRODUCT.VIDEO_TYPE[
          (v as TypeProduct.VideoDTO).softwareType
        ];
      case ENUM_SHOPPING_TYPE.IMAGE:
        return CONSTANT_PRODUCT.IMAGE_TYPE[
          (v as TypeProduct.ImageDTO).softwareType
        ];
      default:
        return;
    }
  }

  function onSelect(e: React.MouseEvent<HTMLUListElement>) {
    const ele = e.target as HTMLElement;
    const id = Number(ele.closest("li")?.dataset?.id);
    const index = ele.closest("button")?.dataset?.index;
    if (index) {
      return onDelete(Number(index));
    }
    !Number.isNaN(id) && onChange(id);
  }

  if (!items?.length) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-2/4 mt-5 select-none">
        <InboxOutlined className="text-5xl" />
        <p className="mt-2">暂无资源</p>
      </div>
    );
  }

  return (
    <ul className="mx-5" onClick={onSelect}>
      {items?.map((v, i) => {
        const productType = getProductType(v);
        const IS_PURCHASE = purchase?.[`${v.id}-${v.licType}`];
        return (
          <li
            key={v.id}
            data-id={v.id}
            className="group flex flex-col p-5 rounded-xl hover:bg-gray-100"
          >
            <article className="w-full flex items-center">
              <Checkbox
                id="terms"
                className="cursor-pointer"
                checked={Boolean(selected[type][v.id!])}
              />
              <img
                className="ml-5 mr-3 w-[117px] h-[66px] rounded-sm"
                src={v.coverImage}
              />
              <div className="h-full py-2 w-[calc(100%-165px)]">
                <h3 className="text-base truncate text-black">{v.title}</h3>
                <div className="flex h-5 items-center space-x-4 mt-2 text-sm text-gray-600">
                  <div>ID: {v.id!}</div>
                  {productType ? (
                    <>
                      <Separator orientation="vertical" />
                      <div>类型：{productType}</div>
                    </>
                  ) : null}
                </div>
              </div>
            </article>
            <div className="h-5 mx-9">
              {IS_PURCHASE ? (
                <p className="text-[13px] leading-5 text-gray-500">
                  您已购买过此素材＞
                </p>
              ) : null}
            </div>
            <div className="flex justify-between">
              <div className="h-8">
                <Button
                  variant="link"
                  data-index={i}
                  className="cursor-pointer h-full px-0 ml-9 hover:no-underline hidden hover:text-gray-500 group-hover:inline-flex"
                >
                  移除
                </Button>
              </div>
              <div className="flex">
                <span className="text-sm/7 pt-0.5 text-gray-600">
                  {CONSTANT_PRODUCT.LIC_TYPE[v.licType]}
                </span>
                <div className="min-w-15 text-end ml-1">
                  <span className="text-black text-xl">{v.price}</span>
                  <span> 元</span>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
