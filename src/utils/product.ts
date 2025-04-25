import { ENUM_PRODUCT } from "@/enum/product";
import { ENUM_SHOPPING_TYPE } from "@/components/Shopping/Products";

import type { TypeProduct } from "@/interface/product";

/**
 * @name formatProductPurchaseRecord 结构化购买记录
 */
export function formatProductPurchaseRecord(
  data: TypeProduct.VideoBoughtDTO[],
  type: ENUM_SHOPPING_TYPE.VIDEO,
): Record<string, boolean>;
export function formatProductPurchaseRecord(
  data: TypeProduct.ImageBoughtDTO[],
  type: ENUM_SHOPPING_TYPE.IMAGE,
): Record<string, boolean>;
export function formatProductPurchaseRecord(
  data: TypeProduct.AudioBoughtDTO[],
  type: ENUM_SHOPPING_TYPE.AUDIO,
): Record<string, boolean>;
export function formatProductPurchaseRecord(
  data: Array<
    | TypeProduct.ImageBoughtDTO
    | TypeProduct.VideoBoughtDTO
    | TypeProduct.AudioBoughtDTO
  >,
  type: ENUM_SHOPPING_TYPE,
) {
  return Object.fromEntries(
    data.flatMap((item) => {
      let id: number;
      switch (type) {
        case ENUM_SHOPPING_TYPE.VIDEO:
          id = (item as TypeProduct.VideoBoughtDTO).vid;
          break;
        case ENUM_SHOPPING_TYPE.IMAGE:
          id = (item as TypeProduct.ImageBoughtDTO).fid;
          break;
        case ENUM_SHOPPING_TYPE.AUDIO:
          id = (item as TypeProduct.AudioBoughtDTO).mid;
          break;
      }
      // 生成授权类型、产品素材ID 唯一主键
      return item.licTypes.map((licType) => [`${id}-${licType}`, true]);
    }),
  );
}

/**
 * @name getProductListMap 结构化购买记录
 */
export function getProductListMap(
  data: TypeProduct.VideoDTO[],
  type: ENUM_SHOPPING_TYPE.VIDEO,
): {
  map: Record<string, TypeProduct.VideoDTO | undefined>;
  list: TypeProduct.VideoDTO[];
};
export function getProductListMap(
  data: TypeProduct.ImageDTO[],
  type: ENUM_SHOPPING_TYPE.IMAGE,
): {
  map: Record<string, TypeProduct.ImageDTO | undefined>;
  list: TypeProduct.ImageDTO[];
};
export function getProductListMap(
  data: TypeProduct.AudioDTO[],
  type: ENUM_SHOPPING_TYPE.AUDIO,
): {
  map: Record<string, TypeProduct.AudioDTO | undefined>;
  list: TypeProduct.AudioDTO[];
};
export function getProductListMap(
  list: Array<
    TypeProduct.VideoDTO | TypeProduct.ImageDTO | TypeProduct.AudioDTO
  >,
  type: ENUM_SHOPPING_TYPE,
) {
  const map: Record<
    string,
    | TypeProduct.VideoDTO
    | TypeProduct.ImageDTO
    | TypeProduct.AudioDTO
    | undefined
  > = {};
  list.forEach((val) => {
    val.id =
      type === ENUM_SHOPPING_TYPE.VIDEO
        ? (val as TypeProduct.VideoDTO).vid
        : type === ENUM_SHOPPING_TYPE.IMAGE
        ? (val as TypeProduct.ImageDTO).fid
        : (val as TypeProduct.AudioDTO).mid;
    map[val.id] = val;
    switch (val.licType) {
      // 企业授权价格=个人授权价 * 4
      case ENUM_PRODUCT.LIC_TYPE.LP:
        val.price = val.price * 4;
        break;
      // 企业PLUS授权价格= 个人授权家价 * 10
      case ENUM_PRODUCT.LIC_TYPE.LPPLUS:
        val.price = val.price * 10;
        break;
      default:
        // 个人类型不管
        break;
    }
  });

  return { map, list };
}
