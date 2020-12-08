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

            container.innerHTML += `<h1>${post.title}</h1>`
            container.innerHTML += `<h2>${post.author}</h2>`
            let postDate = new Date(post.date);
            container.innerHTML += `<h3>${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}</h3>`;
            container.innerHTML += `<h4>${post.content}</h4>`;
            container.innerHTML +=  `<h5>${post.tags}</h5>`;
            
        }
    }catch (message) {
        throw new Error(message);
    }
}