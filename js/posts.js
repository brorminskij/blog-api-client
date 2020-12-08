let container = document.getElementById('postContainer');

window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {
        let response = await fetch('http://localhost:3000/posts/');
        let allPosts = await response.json();
        for (let post of allPosts) {
            console.log(post);

            container.innerHTML += `<h2>${post.title}</h2>`
            container.innerHTML += `<h4>${post.author}</h4>`
            let postDate = new Date(post.date);
            container.innerHTML += `<h5>${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}</h5>`;
            container.innerHTML += `<p>${post.content}</p>`;
            
        }
    }catch (message) {
        throw new Error(message);
    }
}