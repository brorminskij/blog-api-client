window.onload = function() {
    fetchPost();
}

async function fetchPost() {
    let urlParams = new URLSearchParams(window.location.search);
    let container = document.querySelector('container')
    try {
        let response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
        let post = await response.json();
        console.log(post)

        container.innerHTML += `<h4>Title: ${post.title}</h4>`
        container.innerHTML += `<h5>Author: ${post.author}</h5>`
        let postDate = new Date(post.date);
        container.innerHTML += `<h6><strong>${postDate.getFullYear()}-${postDate.getMonth() + 1}-${postDate.getDate()}</strong></h6>`;
        container.innerHTML += `<p>Content: ${post.content}</p>`;
        container.innerHTML += `<h6>Tags: ${post.tags}</h6>`;
        container.innerHTML += `<p><a href="index.html">Back</a></p>`;

    } catch (message) {
        throw new Error(message)
    }
}