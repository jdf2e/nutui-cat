import { HttpClient } from './HttpClient';

export class QryParam {
  [x: string]: any;
  /** 表示业务类型所对应的type，例如：advertGroup对应的业务类型是广告组信息 */
  type: string = '';
  /** 当前业务类型查询的数据结果在返回数据data中的字段（可以自定义，同一分支上同一层查询中，mapTo不能重复，否则结果会被覆盖）（只能包含数字，字母和下划线） */
  mapTo: string = '';
  /** 下一层查询的入参，也是一个对象数组JSON字符串，结构和qryParam是一样的，只不过有些业务类型的其它关键参数依赖上一层查询（当前支持3层查询，如果不需要下一层查询此字段可不传，数据量很大的情况下，不建议嵌套太多层查询） */
  next?: any[];

  constructor(type: string = '', mapTo: string = '') {
    this.mapTo = mapTo;
    this.type = type;
  }
}

export class DynamicParam {
  [x: string]: any;
}

export class BaseApiService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  getCookie(key: any) {
    if (document.cookie) {
      key = '(?:^|; )' + key + '(?:=([^;]*?))?(?:;|$)'
      const reKey = new RegExp(key)
      const res = reKey.exec(document.cookie)
      return res !== null ? decodeURIComponent(res[1]) : ''
    }
  }
}
