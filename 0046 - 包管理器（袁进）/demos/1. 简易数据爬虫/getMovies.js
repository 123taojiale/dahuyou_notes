/* getMovies.js */
const axios = require('axios');
const cheerio = require('cheerio');

/**
 * 获取所有电影数据
 */
async function getMoviesData() {
    const html = await getMoviesHTML();
    const $ = cheerio.load(html); // 转为 jQuery 对象
    const trs = $('tr.item'); // 获取所有的电影对象
    const movieObjs = [];
    for (const tr of trs) {
        const movieObj = getMovieObj($(tr));
        // 将其转化为一个 jquery 对象，因为 getMovieObj 还有用 jquery 上的方法
        movieObjs.push(movieObj);
    }
    return movieObjs;
}

/**
 * 得到所有电脑的 html 字符串
 * @returns
 */
async function getMoviesHTML() {
    const resp = await axios.get('https://movie.douban.com/chart'); // 获取响应结果
    return resp.data; // 获取响应结果中的消息体（这里拿到的就是 页面的 html 字符串）
}

/**
 * 返回一个电影对象的详细信息
 * @param {*} tr
 */
function getMovieObj(tr) {
    const name = tr.find('div.pl2 a').text().replace(/\s/g, ''); // 获取电影名
    const imgSrc = tr.find('a.nbg img').attr('src'); // 获取图片路径
    const des = tr.find('p.pl').text();
    return {
        name,
        imgSrc,
        des
    }
}

module.exports = getMoviesData;