import { ENUM_PRODUCT } from "@/enum/product";

export namespace TypeProduct {
  /**
   * @name DTO 购物车产品 公共数据传输对象
   */
  export interface DTO {
    /**
     * @param auditStatus 上架状态
     */
    auditStatus: ENUM_PRODUCT.AUDIT_STATUS;
    /**
     * @param coverImage 产品封面图
     */
    coverImage: string;
    /**
     * @param price 产品单价
     */
    price: number;
    /**
     * @param title 素材产品标题
     */
    title: string;
    /**
     * @param licType 授权类型
     */
    licType: ENUM_PRODUCT.LIC_TYPE;
  }

  /**
   * @name Video 视频DTO
   */
  export interface VideoDTO extends DTO {
    /**
     * @param vid 视频主键ID
     */
    vid: number;
    /**
     * @param softwareType 素材类型
     */
    softwareType: ENUM_PRODUCT.VIDEO_TYPE;
  }

  /**
   * @name ImageDTO 图片DTO
   */
  export interface ImageDTO extends DTO {
    /**
     * @param fid 图片主键ID
     */
    fid: number;
    /**
     * @param softwareType 素材类型
     */
    softwareType: ENUM_PRODUCT.IMAGE_TYPE;
  }

  /**
   * @name AudioDTO 音频DTO
   */
  export interface AudioDTO extends DTO {
    /**
     * @param mid 图片主键ID
     */
    mid: number;
  }
}
