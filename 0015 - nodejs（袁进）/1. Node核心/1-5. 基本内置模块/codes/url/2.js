const URL = require("url");

const url = new URL.URL("http://nodejs.cn/api/url.html#url_new_url_input_base");
/*
searchParams
*/
console.log(url.searchParams); // => URLSearchParams {}
console.log(url.searchParams.has("a")); // => false
console.log(url.searchParams.get("a")); // => null
console.log(url.searchParams.set("a", 1)); // => undefined
console.log(url.searchParams); // => URLSearchParams { 'a' => '1' }
console.log(url.searchParams.has("a")); // => true
console.log(url.searchParams.get("a")); // => 1
// 创建 searchParams
console.log(new URLSearchParams('?user=abc&query=xyz')); // => URLSearchParams { 'user' => 'abc', 'query' => 'xyz' }