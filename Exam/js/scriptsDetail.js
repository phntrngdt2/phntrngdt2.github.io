window.onload = function(){

    function getIDParam(){
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        //console.log(id);
        return id;
    };

    async function getPostByID(){
        let id = getIDParam();
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        try {
            let response = await fetch(url);
            return await response.json();
        } catch(err) {
            console.log(err);
        };
    };

    async function renderPostID(){
        let post = await getPostByID();
        let htmlContent = "";
        //for(let i of post){
            htmlContent = htmlContent + 
            /*
            `<div class="post">
            <h1 style = "color:red">Post by ID</h1>
            <p>{</p>
            <p class = "post-userId"">"userId": ${post.userId}</p>
            <p class = "post-id">"id": ${post.id}</p>
            <div>
            <p >"title": ${post.title}</p>
            </div>
            <p class = "post-body">"body": ${post.body}</p>
            <p class>}</p>
            </div>` + "<br>";
            `
            */
            `
            <h1 class="header">Post User ${post.userId} with ID ${post.id}  </h1>
            <div class="allPost flex-container">
            <div class="postUserId">
            <h2>userID: ${post.userId}</h2>
            <h2>ID: ${post.id}</h2>
            </div>
            <div class="postTitle">
            <h2>Title</h2>
            <p>${post.title}</p>
            </div>
            <div class="postBody">
            <h2>Body</h2>
            <p>${post.body}</p>
            </div>
            </div>
            `
        //};
        let postContent = document.getElementById("mainDetail");
        postContent.innerHTML = htmlContent;
    };
    renderPostID();

    async function getCmtByPostID(){
        let id = getIDParam();
        let url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        try {
            let response = await fetch(url);
            return await response.json();
        } catch(err) {
            console.log(err);
        };
    };

    async function renderCmt(){
        let id = getIDParam();
        let cmt = await getCmtByPostID();
        console.log(cmt);
        let htmlContent = `<h1 class ="header">Tat ca Comment cua UserID ${id} </h1>`;
        for(let i of cmt){
            htmlContent = htmlContent + 
            /*
            `<div class="cmt">
            <p>{</p>
            <p class = "cmt-userId"">"postId": ${i.postId}</p>
            <p class = "cmt-id">"id": ${i.id}</p>
            <p>"name": ${i.name}</p>
            <p>"email: ${i.email} </p>
            <p class = "cmt-body">"body": ${i.body}</p>
            <p class>}</p>
            </div>` + "<br>";*/

            `
            <div class="allPost flex-container">
            <div class="postUserId">
            <h2>userID: ${i.postId}</h2>
            <h2>ID: ${i.id}</h2>
            </div>
            <div class="postTitle">
            <h2>Name</h2>
            <p>${i.name}</p>
            <h2>Email</h2>
            <p>${i.email}</p>
            </div>
            <div class="postBody">
            <h2>Body</h2>
            <p>${i.body}</p>
            </div>
            </div>
            `
        };
        let cmtContent = document.getElementById("cmt");
        cmtContent.innerHTML = htmlContent;
    };
    renderCmt();
};
