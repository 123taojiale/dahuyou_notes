const getMoviesData = require('./getMovies');
const fs = require('fs');

getMoviesData().then(movies => {
    fs.writeFile('movies.json', JSON.stringify(movies), () => {
        console.log('文件成功写入');
    })
});