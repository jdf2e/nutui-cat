class Cookie {
  static setCookie(name: string, value: any, expiredays: number) {
    let cookieValue: any;
    if (typeof value === 'object') {
      cookieValue = JSON.stringify(value);
    } else {
      cookieValue = value;
    }
    const data: any = new Date();

    data.setDate(data.getDate() + expiredays);
    document.cookie = `${name}=${escape(cookieValue)}${expiredays == null ? '' : `;expires=${data.toGMTString()}`};path=/`;
  }

  static getCookie(name: string): string {
    if (document.cookie.length > 0) {
      let startIndex = document.cookie.indexOf(`${name}=`);
      if (startIndex !== -1) {
        startIndex = startIndex + name.length + 1;
        let endIndex = document.cookie.indexOf(';', startIndex);
        if (endIndex === -1) {
          endIndex = document.cookie.length;
        }
        return unescape(document.cookie.substring(startIndex, endIndex));
      }
    }
    return '';
  }

  static delCookie(name: string) {
    this.setCookie(name, 0, -10);
  }
}

export default Cookie;
