/**
 *  Storage封装
 */
const STORAGE_KEY = "mall";
const find = function(obj, name) {
  if (obj[name]) {
    return obj;
  }
  let res;
  for (let prop in obj) {
    if (
      obj.hasOwnProperty(prop) &&
      Object.prototype.toString.call(obj[prop]) === "[object Object]"
    ) {
      res = find(obj[prop], name);
    }
    if (res) {
      return res;
    }
  }
  return res;
};

export default {
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },
  setStorage(obj) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  },
  findItem(key) {
    const data = this.getStorage();
    const res = find(data, key);
    return res;
  },
  getItem(key) {
    const res = this.findItem(key);
    return res ? res[key] : undefined;
  },
  setItem(key, value) {
    const res = this.findItem(key);
    if (res) {
      res[key] = value;
      this.setStorage(res);
    } else {
      const data = this.getStorage();
      data[key] = value;
      this.setStorage(data);
    }
  },
  clear(key){
    const res = this.findItem(key);
    if(res){
        res[key] = null
        delete res[key]
        this.setStorage(res)
    }
  }
};

// export default {
//     //存储值
//   setItem(key,value,module_name) {
//       let val = this.getStorage()
//       val[key] = value
//       window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
//   },
//   // 获取某一个模块下面的属性user下面的userName
//   getItem(key, module_name) {
//     if (module_name) {
//       let val = this.getItem(module_name);
//       if (val) {
//         return val[key];
//       }
//     }
//     return this.getStorage()[key];
//   },
//   getStorage() {
//     return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
//   },
//   clear(key,module_name){
//       let val = this.getStorage()
//       if(module_name){
//           delete val[module_name][key]
//       }else{
//           delete val[key]
//       }
//       this.setItem(val)
//   }
// };
