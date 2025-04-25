export namespace ENUM_PRODUCT {
  /**
   * @name AUDIT_STATUS 上架状态
   */
  export const enum AUDIT_STATUS {
    /**
     * @param SUCCESS 上架
     */
    SUCCESS = "SUCCESS",
    /**
     * @param FAIL 下架
     */
    FAIL = "FAIL",
  }

  /**
   * @name LIC_TYPE 授权类型
   */
  export const enum LIC_TYPE {
    /**
     * @param NP 个人
     */
    NP = "NP",
    /**
     * @param LP 企业
     */
    LP = "LP",
    /**
     * @param LPPLUS 企业PLUS
     */
    LPPLUS = "LPPLUS",
  }

  /**
   * @param VIDEO_TYPE 视频类型
   */
  export const enum VIDEO_TYPE {
    /**
     * @param VIDEO 视频
     */
    VIDEO,
    /**
     * @param AE AE模板
     */
    AE,
    /**
     * @param C4D C4D模板
     */
    C4D,
  }

  /**
   * @param IMAGE_TYPE 图片类型
   */
  export const enum IMAGE_TYPE {
    /**
     * @param IMAGE 图片
     */
    IMAGE,
    /**
     * @param AI AI模板
     */
    AI,
    /**
     * @param PSD PSD模板
     */
    PSD,
  }
}
