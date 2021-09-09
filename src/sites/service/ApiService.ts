import { HttpClient } from './HttpClient';
// import { getUUID } from '@jmfe/jm-common';
// import cookie from '@jmfe/jm-cookie';
import { Toast } from '@nutui/nutui';

export class ApiService {
  // static clientParam = {
  //   client: 'wh5',
  //   clientVersion: '1.0.0',
  //   sid: cookie.get('sid'),
  //   uuid: getUUID() || cookie.get('mba_muid') || ''
  // };
  static _toast: any = Toast;

  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }
}
