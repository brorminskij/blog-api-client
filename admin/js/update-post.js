window.onload = function() {
    prefillForm();
}


async function prefillForm() {
    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('id'));
    
    try {
        let response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
        let data = await response.json();
        console.log(data.content);
        
        document.getElementById('title').value = data.title;
        document.getElementById('author').value = data.author;
        document.getElementById('content-textarea').value = data.content;
        
        
        
    } catch (message) {
        throw new Error(message);
    }
}