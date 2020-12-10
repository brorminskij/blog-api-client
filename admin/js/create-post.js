let form = document.getElementById('create-post-form');

form.addEventListener('submit', async function createPost(e) {
    e.preventDefault();

    let object = {
        content: document.getElementById('content-textarea').value,
        title: document.getElementById('titleInput').value,
        author: document.getElementById('authorInput').value
    }
    console.log(object);
    console.log(JSON.stringify(object));

    try {
        var response = await fetch('http://localhost:3000/posts/', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
     body: JSON.stringify(object)
        });
        window.location.replace('index.html')
    } catch (message) {
         throw new Error(message)
        }
})