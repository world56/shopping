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
 * @name getShoppingMusics 获取 “购物车” 音频
 */
export function getShoppingAudios() {
  return request<TypeCommon.Response<TypeProduct.AudioDTO>>(
    "/vjm/cart/music/musics",
    {
      method: ENUM_HTTP.REQUEST_MODE.GET,
    },
  );
}

/**
 * @name getVideoPurchaseRecords 获取 “购物车” 视频
 */
export function getVideoPurchaseRecords() {
  return request<TypeCommon.Response<TypeProduct.VideoBoughtDTO>>(
    "/vjh/video/download/lic-types-bought",
    {
      method: ENUM_HTTP.REQUEST_MODE.GET,
    },
  );
}

/**
 * @name getImagePurchaseRecords 获取 “购物车” 图片
 */
export function getImagePurchaseRecords() {
  return request<TypeCommon.Response<TypeProduct.ImageBoughtDTO>>(
    "/vjf/foto/download/lic-types-bought",
    {
      method: ENUM_HTTP.REQUEST_MODE.GET,
    },
  );
}

/**
 * @name getAudioPurchaseRecords 获取 “购物车” 音频
 */
export function getAudioPurchaseRecords() {
  return request<TypeCommon.Response<TypeProduct.AudioBoughtDTO>>(
    "/vjm/music/download/lic-types-bought",
    {
      method: ENUM_HTTP.REQUEST_MODE.GET,
    },
  );
}
