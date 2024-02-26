function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    const parentDiv = document.getElementById('userContainer');
    for (const user of data) {
        const div = document.createElement('div');
        parentDiv.appendChild(div);

        const h1 = document.createElement('h1');
        h1.innerText = user.name;
        div.appendChild(h1);
        h1.classList.add("font-bold");


        const p = document.createElement('p');
        p.innerText = user.email;
        div.appendChild(p);
        const h2 = document.createElement('h2');
        h2.innerText = '@' + user.username;
        div.appendChild(h2);
        div.classList.add("m-4");
        div.classList.add("bg-white");
        div.classList.add("p-4");
        div.classList.add("rounded");

    }
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
const postContainer= document.getElementById('postContainer');
function displayPosts(data) {
    for(const post of data){
        const singlePost=document.createElement('div');
        singlePost.classList.add("m-4")
        singlePost.classList.add("p-4")
        singlePost.classList.add("bg-white")
        singlePost.classList.add("rounded")
        singlePost.classList.add("text-left")
        singlePost.innerHTML=`
            <h4 class=" font-bold uppercase">Author:user-${post.userId}</h4>
            <h1 class=" capitalize">title:<span class=" font-bold">${post.title}</span></h1>
            <p class=" capitalize">${post.body}</p>
        `
        postContainer.appendChild(singlePost);
    }
}