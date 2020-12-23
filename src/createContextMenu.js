"use strict"

import openCodeInRespon from "./methods/openCodeInRespon.js"

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "respon",
    type: "normal",
    contexts: ["selection"],
    title: "Open this code in Respon",
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (
    info.menuItemId === "respon" &&
    tab.url.includes("room.chuo-u.ac.jp") //CHANGE
  ) {
    openCodeInRespon(info.selectionText)
  }
})
