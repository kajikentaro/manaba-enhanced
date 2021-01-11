"use strict"

const trimCode = (str: string) => {
  return str
    .replace(/[０-９]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    })
    .replace(/[^0-9]/g, "")
}

const validateCode = (code: string) => {
  const match = new RegExp("(\\d{9})", "g")
  return match.test(code)
}

/**
 * Open Respon code in the new tab
 * @param {string} code Respon code like "123 456 789"
 */
const openCodeInRespon = (code: string): void => {
  const trimmedCode = trimCode(code)
  if (validateCode(trimmedCode)) {
    window.open(`https://yes.chuo-u.ac.jp/attend/chuo?code=${trimmedCode}`)
  }
}

export default openCodeInRespon
