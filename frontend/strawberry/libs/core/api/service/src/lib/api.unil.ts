import {HttpHeaders, HttpParams} from "@angular/common/http";

export interface ApiRequestOptions {
  headers: Record<string, any>;
  params: Record<string, any>;
  reportProgress: boolean;
  observe: any;
  responseType: any;
  withCredentials: boolean;
}

export const nullParamValue = 'NULL';

export function getApiRequestOptions(options: Partial<ApiRequestOptions>): Partial<ApiRequestOptions> | undefined {
  if (!options) {
    return;
  }

  let params: Record<string, any> | HttpParams = {};
  let headers: Record<string, any> = {};

  if (options.headers) {
    headers = !(options?.headers instanceof HttpHeaders) ? new HttpHeaders(options.headers) : options.headers;
  }

  if (!options.params) {
    return { ...options, params, headers };
  }

  params = new HttpParams();

  for (const propKey of Object.keys(options.params).sort()) {
    const param: any = options.params[propKey];

    if (param === undefined) {
      continue;
    }

    if (Array.isArray(param)) {
      param.forEach((item: any) => {
        params = params.append(`${propKey}[]`, item === null ? nullParamValue : item.toString())
      })
    } else {
      params = params.append(propKey, param === null ? nullParamValue : param.toString())
    }
  }

  return { ...options, params, headers };
}
