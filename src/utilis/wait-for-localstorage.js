/**
 * Michael Scott Hertzberg <mshertzberg@gmail.com> (http://hertzber.gs)
 *
 * recursively check for set localStorage value every 100ms.
 * this will also safely clear the timeout once found.
 * can be used callback style or directly.
 * functionally pure.
 */
export function waitForLocalStorage(key, cb, timer) {
    if (!localStorage.getItem(key)) return (timer = setTimeout(waitForLocalStorage.bind(null, key), 100))
    clearTimeout(timer)
    if (typeof cb !== 'function') return localStorage.getItem(key)
    return cb(localStorage.getItem(key))
}