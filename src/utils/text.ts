const truncate = (str:string, len:number=155): string => {
  if (str.length <=  len) { return str }
  str = str.substr(0, len - 1)
  return `${str.substr(0, str.lastIndexOf(' '))}...`
}

export { truncate }
