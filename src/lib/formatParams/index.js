/**
 * formdata => query
 * @param obj
 * @returns {string}
 */
export const formatQuery = obj => {
  let query = '?'
  Object.keys(obj).forEach(key => {
    query += `${key}=${obj[key]}&`
  })
  return query.substring(0, query.length - 1)
}
/**
 * 删除空的参数
 * @param obj
 * @returns {Object}
 */
export const deleteUseless = obj => {
  Object.keys(obj).forEach(key => {
    (obj[key] === "" || typeof obj[key] === "undefined" || obj[key] === null || (Array.isArray(obj[key]) && obj[key].length === 0)) && delete obj[key]
  })
  return obj
}
/**
 * 对象去重排序
 * @param obj
 * @returns {Object}
 */
export const sortObj = obj => {
  const _obj = {}
  Array.from(new Set(Object.keys(obj))).sort().map(key => {
    _obj[key] = obj[key]
  })
  return _obj
}