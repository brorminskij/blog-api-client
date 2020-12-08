let table = document.querySelector('table');

window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {
        let response = await fetch('http://localhost:3000/posts');
        let allPosts = await response.json();
        for (let post of allPosts) {
            
            let postDate = new Date(post.date);
            table.innerHTML += `<tr><td>${post.title}</td>` + `<td>${post.author}</td>` +
            `<td>${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}</td>` + 
            `<td>${post.tags}</td>` +
            `<td><a href="/admin/update-post.html?id=${post['_id']}">Update</a> | <a href='#' class="delete-post" data-id="${post['_id']}">Delete</a></td></tr>`;
        }
    }catch (message) {
        throw new Error(message);
    }


var deletePosts = document.getElementsByClassName('delete-post');


    for(let link of deletePosts) {
         link.addEventListener('click', async function() {

            try {
             await fetch('http://localhost:3000/posts/' + this.dataset.id, {
                 method: 'DELETE'
         })
         this.parentNode.parentNode.remove()
        } catch(message) {
            throw new Error(message);
        }
    })
}
}