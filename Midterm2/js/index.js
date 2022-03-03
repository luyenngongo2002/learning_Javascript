const URL_API = "https://61ce79737067f600179c5ef3.mockapi.io/news/"
axios.get(URL_API).then(res => {
    var newsArr = res.data
    for (var news of newsArr) {
        document.getElementById('main').innerHTML += `
            <div class="news">
                    <h1>${news.title}</h1>
                    <img src="${news.image}"/>
                    <p>${news.description}</p>
                    <a href="" class="readmore">Đọc thêm</a>
                    <div class="clearfix"></div>
            </div>
        `
    }
}) 
