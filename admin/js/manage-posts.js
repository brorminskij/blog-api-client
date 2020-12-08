let table = document.querySelector('table');

window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {
        let response = await fetch('http://localhost:3000/posts/');
        let allPosts = await response.json();
        for (let post of allPosts) {
            console.log(post);
            
            let postDate = new Date(post.date);
            table.innerHTML += `<tr><td>${post.title}</td>` + `<td>${post.author}</td>` +  
            `<td>${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}</td>` + 
            `<td>${post.content}</td>` +
            `<td><a href="/admin/update-post.html">Update</a> | <a class="delete-post" href="">Delete</a></td></tr>`;
        }
    }catch (message) {
        throw new Error(message);
    }
}

var deletePosts = document.getElementsByClassName('delete-post');
    for(let link of deletePosts) {
        link.addEventListener('click', deletePost);
    }
    async function deletePost(e) {
        e.preventDefault();
           let response = await fetch('http://localhost:3000/posts/');
           let data = response.json();
           console.log(this.dataset.id);
            this.parentNode.parentNode.remove();
        }