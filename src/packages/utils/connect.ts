
function connectData(data: any, params?: any) {
  if(data) {
    // console.log('data 1', data)
    // console.log('params', params)
    var fieldConfig: any = {
      // 正常入参
      cName: params && params.cName ? params.cName : params && params.cName === false ? false : ['name'] , // 名称
      cNameTag: params && params.cNameTag, // 名称前的标签
      cDesc: params && params.cDesc ? params.cDesc : params && params.cDesc === false ? false : ['desc'] , // 利益点
      cImage: params && params.cImage ? params.cImage : params && params.cImage === false ? false : ['image'] , // 图片
      cLogo: params && params.cLogo, // logo图
      cLabel: params && params.cLabel, // 标签，通常用于左上角，一般只有一个
      cTag: params && params.cTag, // 标签，通常用于内容区，个数可能不止一个
      cDistance: params && params.cDistance, // 距离，通常用于LBS
      cBottom: params && params.cBottom, // 底部操作区
      cRight: params && params.cRight, // 右侧操作区
      cPrice: params && params.cPrice ? params.cPrice : params && params.cPrice === false ? false : ['pPrice'] , // 价格
      cPrePrice: params && params.cPrePrice, // 价格前的内容
      cAfterPrice: params && params.cAfterPrice, // 价格后的内容
      cLinePrice: params && params.cLinePrice ? params.cLinePrice : params && params.cLinePrice === false ? false : ['linePrice'] , // 划线价格
      cPreLinePrice: params && params.cPreLinePrice, // 划线价格前的内容
    };
    // console.log('fieldConfig 1', fieldConfig)
    // console.log('item', data)
    // console.log('index', i)
    Object.keys(fieldConfig).forEach(attrName => {
      // console.log('fieldConfig item', fieldConfig[attrName])
      // console.log('attrName', attrName)
      // 判断是否有这个属性
      if(fieldConfig[attrName]) {
        // console.log('有这个属性', fieldConfig[attrName])
        try {
          fieldConfig[attrName].forEach((attribute: any) => {
            // console.log('attribute', attribute)
            // console.log('data的字段:', data[attribute])
            // 判断字段是否是兜底字段
            if(attribute.indexOf('"') == -1) {
              // console.log('不是兜底字段')
              if(attribute.split('.').length > 1) {
                let arr: any = []
                attribute.split('.').forEach((dotAttr:any, index:any) => {
                  // console.log('dotAttr', dotAttr)
                  if(dotAttr.indexOf('[') != -1) {
                    let str = dotAttr.split(/\[|\]/);
                    let str1 = str[0];
                    let str2 = str[1];
                    if(index == 0) {
                      if(data && data[str1] && data[str1][str2]) {
                        arr = data[str1][str2] 
                      } else {
                        arr = ''
                      }
                    } else {
                      if(arr && arr[str1] && arr[str1][str2]) {
                        arr = arr[str1][str2] 
                      } else {
                        arr = ''
                      }
                    }
                  } else {
                    arr = index == 0 ? data[dotAttr] : arr[dotAttr]
                    if(index == 0) {
                      if(data && data[dotAttr]) {
                        arr = data[dotAttr]
                      } else {
                        arr = ''
                      }
                    } else {
                      if(arr && arr[dotAttr]) {
                        arr = arr[dotAttr]
                      } else {
                        arr = ''
                      }
                    }
                  }
                  // console.log('arr', arr)
                });
                fieldConfig[attrName] = arr;
                // console.log('fieldConfig[attrName]', fieldConfig)
                throw Error();
                // console.log('arr', arr)
              } else {
                attribute = attribute.indexOf('[') == -1 ? attribute : attribute
                if(attribute.indexOf('[') != -1) {
                  let str = attribute.split(/\[|\]/);
                  let str1 = str[0];
                  let str2 = str[1];
                  // console.log('str1', str1)
                  // console.log('str2', str2)
                  // console.log('duan', data)
                  if(data && data[str1] &&  data[str1][str2] ) {
                    // console.log('判断是否有这个字段1')
                    fieldConfig[attrName] = data[str1][str2]
                    // console.log('fieldConfig[attrName]', fieldConfig[attrName])
                    throw Error();
                  } else {
                    fieldConfig[attrName] = ''
                  }
                } else {
                  // console.log('com2', get('attribute', data))
                  // console.log('attribute', attribute)
                  if(data && data[attribute]) {
                    // console.log('判断是否有这个字段2')
                    fieldConfig[attrName] = data[attribute]
                    // console.log('fieldConfig[attrName]', fieldConfig[attrName])
                    throw Error();
                  } else {
                    // console.log('没有')
                    fieldConfig[attrName] = ''
                  }
                }
              }
              
            } else {
              console.log('是兜底字段')
              // 兜底字段处理
              fieldConfig[attrName] = attribute.replace(/\"/g, '')
            }           
          });
        } catch (e) {
        }
      } else {
        // 没有则为空
      }
    })
    data = Object.assign(data, fieldConfig);
    // console.log('data 2', data)
    return data
  }
}

export default connectData;
