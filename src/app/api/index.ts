import request from "@/lib/request";

import { ENUM_HTTP } from "@/enum/http";

import type { TypeCommon } from "@/interface/common";
import type { TypeProduct } from "@/interface/product";

/**
 * @name getShoppingVideos 获取 “购物车” 视频
 */
export function getShoppingVideos() {
  return request<TypeCommon.Response<TypeProduct.VideoDTO>>(
    "/vjh/buyer/cart/videos",
    {
      method: ENUM_HTTP.REQUEST_MODE.GET,
    },
  );
}

/**
 * @name getShoppingImages 获取 “购物车” 图片
 */
export function getShoppingImages() {
  return request<TypeCommon.Response<TypeProduct.ImageDTO>>(
    "/vjh/buyer/cart/fotos",
    {
      method: ENUM_HTTP.REQUEST_MODE.GET,
    },
  );
}

/**
 * @name getShoppingMusics 获取 “购物车” 图片
 */
export function getShoppingAudios() {
  return request<TypeCommon.Response<TypeProduct.AudioDTO>>(
    "/vjm/cart/music/musics",
    {
      method: ENUM_HTTP.REQUEST_MODE.GET,
    },
  );
}
