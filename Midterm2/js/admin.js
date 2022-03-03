const URL_API = "https://61bc10bcd8542f0017824518.mockapi.io/news/"

const addPost = () => {
    var title = document.getElementById("title").value;
    var img = document.getElementById("img").value
    var des = document.getElementById("description").value

    if (!(title && img && des)) {
        alert("nhập đủ thông tin để đăng tin!")
        return
    }

    axios.post(URL_API, {
        title: title,
        img: img,
        description: des
    }).then(() => {
        alert("Post bài thành công!")
    })
}
