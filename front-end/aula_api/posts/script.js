const url = "https://jsonplaceholder.typicode.com/posts?userId=" + localStorage.getItem("id");
const list = document.querySelector(".list");

fetch(url)
.then(resp => { return resp.json() })
.then(data => {
    data.forEach(post => {
        generateHtml(post.title, post.body);
    })
})
.catch(err => { console.log(err) });

function generateHtml(title,body) {
    let post = document.querySelector(".post").cloneNode(true);
    post.classList.remove("model");
    post.querySelector("#title").innerHTML = title;
    post.querySelector("#body").innerHTML = body;
    list.appendChild(post);
}