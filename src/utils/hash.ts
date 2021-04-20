import { encode } from 'base-64'

const base64Encode = (str:string): string => {
  /**
   * Ini karena di node.js belum ada btoa() sehingga bikin gagal tes
   */
  (window as any).global = window
  if (!global.btoa) {
    global.btoa = encode;
  }
  // const utf8Bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_match, p1:string) {
  //   return String.fromCharCode('0x' + p1);
  // })

  return btoa(str);
}

export {
  base64Encode
}
