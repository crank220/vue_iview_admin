/**
 * email verification
 * @param str
 * @returns {Boolean}
 */
export const isEmail = str => {
  return !(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str))
}
/**
 * url verification
 * @param str
 * @returns {Boolean}
 */
export const isUrl = str => {
  return !(/^(https:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(str))
}
/**
 * card verification
 * @param str
 * @returns {Boolean}
 */
export const isCard = str => {
  return !(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str))
}
/**
 * phone verification
 * @param str
 * @returns {Boolean}
 */
export const isPhone = str => {
  return !(/^1\d{10}$/.test(str))
}
/**
 * password verification
 * @param str
 * @returns {Boolean}
 */
export const isPassword = str => {
  return !(/^(?=.*\d)(?=.*[a-z])[a-zA-Z\d]{6,20}$/.test(str))
}