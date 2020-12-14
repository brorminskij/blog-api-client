let container = document.getElementById('postContainer');

window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {
        let response = await fetch('http://localhost:3000/posts/');
        let allPosts = await response.json();
        for (let post of allPosts) {
            console.log(post['_id']);


            container.innerHTML += `<h4>Title: ${post.title}</h4>`
            container.innerHTML += `<h5>Author: ${post.author}</h5>`
            let postDate = new Date(post.date);
            container.innerHTML += `<h6><strong>${postDate.getFullYear()}-${postDate.getMonth() + 1}-${postDate.getDate()}</strong></h6>`;
            container.innerHTML += `<p>Content: ${post.content.substring(0,100)}</p>`;
            container.innerHTML += `<a href="/post.html?id=${post['_id']}">Read More</a>`;
            container.innerHTML += `<h6>Tags: ${post.tags}</h6>`;

        }
    } catch (message) {
        throw new Error(message);
    }
}