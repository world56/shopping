import { extend } from "umi-request";

import { ENUM_HTTP } from "@/enum/http";

import type { ResponseError } from "umi-request";

export interface ServiceResponse<T> {
  content: T;
  readonly message?: string;
  readonly code: ENUM_HTTP.HTTP_CODE;
}

const MSG_WHITELIST = [
  "AbortError: The user aborted a request.",
  "DOMException: The user aborted a request.",
];

async function errorHandler(res: ResponseError) {
  return Promise.reject(res.response);
}

const request = extend({
  timeout: 30 * 1000,
  errorHandler,
});

request.interceptors.request.use(
  (url, options) => {
    return { url: `/api/${url}`, options };
  },
  {
    global: true,
  },
);

request.interceptors.response.use(
  async (res, req) => {
    try {
      const data = await res.clone().json();
      switch (res.status) {
        case ENUM_HTTP.HTTP_CODE.OK:
          return Promise.resolve(data);
        default:
          return Promise.reject(data);
      }
    } catch (e) {
      const error = String(e);
      if (MSG_WHITELIST.includes(error)) return;
      return Promise.reject(e);
    }
  },
  {
    global: true,
  },
);

export default request;
