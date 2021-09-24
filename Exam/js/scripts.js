"use strict"
window.onload = function(){
    async function getPost(){
        let url = "https://jsonplaceholder.typicode.com/posts";
        try{
            let respose = await fetch(url)
            return await respose.json();
        } catch(err) {
            console.log(err);
        };
    };
    async function renderPost(){
        let post = await getPost();
        console.log(post);
        let htmlContent = "";
        for(let i of post){
            htmlContent = htmlContent + /*`<div class="post">
            <p class = "margin5">{</p>
            <p class="post-userId"">"userId": ${i.userId}</p>
            <a class="readMore" href="user.html?userId=${i.userId}" target="_blank">Read more</a>
            <p class="post-id">"id": ${i.id}</p>
            <div>
            <p class="flex">"title": ${i.title}</p>
            <a class="readMore" href="detail.html?id=${i.id}" target="_blank">Read more</a>
            </div>
            <p class="post-body">"body": ${i.body}</p>
            <p class = "margin5">}</p>
            </div>` + "<br>";*/
            `
            <div class="allPost flex-container">
            <div class="postUserId">
            <h2>userID: ${i.userId}</h2>
            <a href="user.html?userId=${i.userId}" target="_blank">Read More</a>
            <h2>ID: ${i.id}</h2>
            </div>
            <div class="postTitle">
            <h2>Title</h2>
            <p>${i.title}</p>
            <a href="detail.html?id=${i.id}" target="_blank">Read More</a>
            </div>
            <div class="postBody">
            <h2>Body</h2>
            <p>${i.body}</p>
            </div>
            </div>
            `
            
        };
        let postContent = document.getElementById("main");
        postContent.innerHTML = htmlContent;
    };
    renderPost();
};