import { ENUM_PRODUCT } from "@/enum/product";

export namespace CONSTANT_PRODUCT {
  export const LIC_TYPE = {
    [ENUM_PRODUCT.LIC_TYPE.NP]: "个人授权",
    [ENUM_PRODUCT.LIC_TYPE.LP]: "企业授权",
    [ENUM_PRODUCT.LIC_TYPE.LPPLUS]: "企业PLUS授权",
  };

  export const VIDEO_TYPE = {
    [ENUM_PRODUCT.VIDEO_TYPE.AE]: "AE模板",
    [ENUM_PRODUCT.VIDEO_TYPE.C4D]: "C4D模板",
    [ENUM_PRODUCT.VIDEO_TYPE.VIDEO]: "视频素材",
  };

  export const IMAGE_TYPE = {
    [ENUM_PRODUCT.IMAGE_TYPE.AI]: "AI模板",
    [ENUM_PRODUCT.IMAGE_TYPE.PSD]: "PSD模板",
    [ENUM_PRODUCT.IMAGE_TYPE.IMAGE]: "图片素材",
  };

}
