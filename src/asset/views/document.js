export const $get = function (selector, selectors) {
    var doc = "";

    if (selector) {
        doc =  document.querySelector(selector)
    } else if (selectors) {
        doc = document.querySelectorAll(selectors)
    }

    return doc;
}

/**
 * 
 * @param {String} event 
 * @param {HTMLElement} element 
 * @param {Function} cb 
 */

export const $on = function (event, element, cb) {
    element.addEventListener(event, cb)
}