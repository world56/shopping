export namespace TypeCommon {
  /**
   * @name Response 服务器返回结构
   */
  export interface Response<T> {
    data: T[];
  }

  /**
   * @name PrimaryKey 数据库主键
   */
  export interface PrimaryKey<T = number> {
    id?: T;
  }
}
