import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const config = {
  appid: '',
  baseUrl: '',
  buildTime: process.env.buildTime,
  isPrd: true, // 是否为线上
  activityId: '01015792',
  activityCode: 'TXDQvgrFsw6fhXPMyGCdPoE3rFh',
  pageId: '2859471',
  applyKey: 'big_brand',
  // getBabelChannel: getBabelChannel(),
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

export class HttpClient {
  private checkStatus(response: AxiosResponse<any>): ResponseData {
    const resData: ResponseData = {
      state: 0,
      value: {},
      message: ''
    };
    // 如果http状态码正常，则直接返回数据
    if (
      response &&
      (response.status === 200 ||
        response.status === 304 ||
        response.status === 400)
    ) {
      // 如果不需要除了data之外的数据，可以直接 return response.data
      resData.value = response.data;
    }
    return resData;
  }
  /**
   * request请求
   * @param {string} url url
   * @param {string} method get|post
   * @param {*} [params] 请求参数
   */
  public async request(
    url: string,
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
        url: config.baseUrl + url,
        data: params,
        params: params,
        timeout: 1000 * 30,
        withCredentials: true,
        crossDomain: true,
        headers
      };

      const res = await axios(options as AxiosRequestConfig);
      return this.checkStatus(res);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

/**
 * 响应对象
 * @param {number} state 0 成功 1失败
 * @param {any} value 接口响应数据
 * @param {string} message 服务器响应信息msg
 */
interface ResponseData {
  state: number;
  value?: any;
  message: string;
}
