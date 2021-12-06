import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const qs = require('qs');
import { Toast } from '@nutui/nutui';
const _toast: any = Toast;
const loading: any = '';

const config = {
  appid: '',
  baseUrl: '',
  buildTime: process.env.buildTime,
  isPrd: true, // 是否为线上
  activityId: '',
  activityCode: '',
  pageId: '',
  applyKey: 'big_brand',
  // 地理位置信息查询
  lbsAppid: 'f9a951c00d03d949cfb483873a69fe88',
  /** 经纬度 */
  geo: {
    lng: '',
    lat: ''
  },
  /** 四级地址 */
  area: '',
  setting(_config: any) {
    this.area = _config.area;
    this.geo.lat = _config.lat;
    this.geo.lng = _config.lng;
  }
};
const { baseUrl } = config;

export class HttpClient {
  /**
   * 检查状态
   * @param {ResponseData} response 响应值
   */
  private checkStatus(response: AxiosResponse<any>): ResponseData | null {
    if (loading != '') loading.hide();
    // 如果http状态码正常，则直接返回数据
    if (
      response &&
      (response.status === 200 ||
        response.status === 304 ||
        response.status === 400)
    ) {
      // 如果不需要除了data之外的数据，可以直接 return response.data
      const resData: ResponseData = {
        state: 0,
        value: response.data,
        message: response.data.msg
      };
      if (response.data.code == '0') {
      } else {
        // 访问达到上限
        if (response.data.code == '601') {
          resData.state = 1;
          resData.value = response.data;
          resData.message = response.data.tips;
        } else {
          resData.state = 1;
          resData.value = response.data;
        }
      }
      if (resData.state == 1) {
        _toast.text(resData, { duration: 500 });
      }
      return resData;
    } else {
      _toast.text('服务器出错了，请稍后再试！', { duration: 500 });
      return null;
    }
  }

  public post(params: any = {}) {
    return this.request('post', params);
  }
  public get(params: any = {}) {
    return this.request('get', params);
  }
  /**
   * request请求
   * @param {string} method get | post
   * @param {*} [params] 请求参数
   */
  private async request(
    method: string,
    params: any
  ): Promise<ResponseData | null> {
    const defaultHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
    const headers = Object.assign(defaultHeaders, params.header);
    try {
      const options = {
        method,
        url: baseUrl,
        data: params,
        params: params,
        timeout: 1000 * 30,
        withCredentials: true,
        crossDomain: true,
        headers
      };
      if (method == 'post') {
        delete options.params;
        if (
          headers['Content-Type'] ==
          'application/x-www-form-urlencoded;charset=UTF-8'
        ) {
          options.data = qs.stringify(options.data);
        }
      }
      // if (method == 'post' && url.indexOf('updateCartSelectedState') > 0) {
      //     delete options.params;
      // }

      const res = await axios(options as AxiosRequestConfig);
      return this.checkStatus(res);
    } catch (error) {
      console.error(error);
      if (loading != '') loading.hide();
      _toast.text('服务器出错了，请稍后再试！');
      return null;
    }
  }
}

/**
 * 内部 响应对象
 * @param {number} state 0 成功 1失败
 * @param {any} value 接口响应数据
 * @param {string} message 服务器响应信息msg
 */
export class ResponseData {
  state = 0;
  value?: any;
  message = '';
}
