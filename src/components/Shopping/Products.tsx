import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import type { TypeProduct } from "@/interface/product";

const url = `https://img1.baidu.com/it/u=142496994,3021742835&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500`;

interface TypeProductProps {
  /**
   * @param type 产品对应的类型
   * @description 根据这个来选择对应的主键ID
   */
  type: ENUM_SHOPPING_TYPE;
  items?: Array<TypeProduct.DTO>;
}

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

/**
 * @name Products 产品详情
 */
const Products: React.FC<TypeProductProps> = ({ type, items }) => {
  return (
    <ul className="mx-6">
      {items?.map((v) => (
        <li className="flex flex-col p-5 rounded-xl hover:bg-gray-100">
          <article className="w-full flex items-center">
            <Checkbox id="terms" className="cursor-pointer" />
            <img
              className="ml-5 mr-3 w-[117px] h-[66px] rounded-sm"
              src={url}
            />
            <div className="h-full py-2 w-[calc(100%-165px)]">
              <h3 className="text-base text-black">{v.title}</h3>
              <div className="flex h-5 items-center space-x-4 mt-2 text-sm text-gray-600">
                <div>ID: 098675</div>
                <Separator orientation="vertical" />
                <div>类型：视频素材</div>
              </div>
            </div>
          </article>
          <div className="mt-5 flex justify-end">
            <span className="text-sm/7 pt-0.5 text-gray-600">企业授权</span>
            <div className="w-22 text-end ml-1">
              <span className="text-black text-xl">{v.price}</span>
              <span> 元</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;
