window.onload = function(){

    function getUserIDParam(){
        const urlParams = new URLSearchParams(window.location.search);
        const userid = urlParams.get('userId');
        //console.log(id);
        return userid;
    };

    async function getUserByID(){
        let id = getUserIDParam();
        let url = `https://jsonplaceholder.typicode.com/users/${id}`;
        try {
            let response = await fetch(url);
            return await response.json();
        } catch(err) {
            console.log(err);
        };
    };

    async function renderUserID(){
        let user = await getUserByID();
        let id = getUserIDParam();
        let htmlContent = `<h1 class ="header"> User ${id} Information </h1>`;
        //for(let i of post){
            htmlContent = htmlContent + 
            /*
            `
            <h1 style="color:red">User Information</h1>
            <div class="user>
            <p class = "user-Id"">"<b>Id</b>": ${user.id}</p>
            <p class = "user-name">"<b>Name</b>": ${user.name}</p>
            <p class = "user-username">"<b>Username</b>": ${user.username}</p>
            <p class = "email-username">"<b>Email</b>": ${user.email}</p>
            <p class = "address-username">"<b>Address</b>": <b>Street</b>: ${user.address.street}, <b>Suite</b>: ${user.address.suite}, <b>City</b>: ${user.address.city}, 
            <b>Zipcode</b>: ${user.address.zipcode},<b>Geo</b>: (lat: ${user.address.geo.lat} - lng: ${user.address.geo.lng})"
            </p>
            <p class = "phone-username">"<b>Phone</b>": ${user.phone}</p>
            <p class = "website-username">"<b>Website</b>": ${user.website}</p>
            <p class = "company-username">"<b>Company-name</b>: ${user.company.name}, <b>CatchPhrase</b>: ${user.company.catchPhrase}, <b>BS</b>: ${user.company.bs} "</p>
            </div>` + "<br>";*/
        //};
            `
            <div class="grid-container">
            <div class="grid-item"><p><b>Name:</b> ${user.name}</p></div>
            <div class="grid-item">
            <p><b>Phone:</b> ${user.phone}</p>
            </div>
            <div class="grid-item"><p><b>Username:</b> ${user.username}</p></div>
            <div class="grid-item"><p><b>Website:</b> ${user.website}</p></div> 
            <div class="grid-item"><p><b>Email:</b> ${user.email}</p></div>
            <div class="grid-item">
            <p><b>Company-name:</b> ${user.company.name} - <b>CatchPhrase:</b> ${user.company.catchPhrase}</p>
            <p><b>BS:</b>synergize scalable supply-chains</p>
            </div> 
            <div class="grid-item grid2">
            <p><b>Address:</b> ${user.address.street} Street, ${user.address.suite}, ${user.address.city} City - <b>Zipcode:</b> ${user.address.zipcode} </p>
            <p><b>Geo:</b> (lat: ${user.address.geo.lat} - lng: ${user.address.geo.lng})</p>
            </div>  
            </div>
            `
        let userContent = document.getElementById("mainUser");
        userContent.innerHTML = htmlContent;
    };
    renderUserID()

    async function getPostByID(){
        let id = getUserIDParam();
        let url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        try {
            let response = await fetch(url);
            return await response.json();
        } catch(err) {
            console.log(err);
        };
    };

    async function renderUserPostID(){
        let id = getUserIDParam();
        let post = await getPostByID();
        let htmlContent = `<h1 class ="header"> User ${id} Post</h1>`;
        for(let i of post){
            htmlContent = htmlContent +
            /*
            `<div class="post">
            <p>{</p>
            <p class = "post-userId"">"userId": ${i.userId}</p>
            <p class = "post-id">"id": ${i.id}</p>
            <div>
            <p >"title": ${i.title}</p>
            </div>
            <p class = "post-body">"body": ${i.body}</p>
            <p class>}</p>
            </div>` + "<br>";
            */
            `
            <div class="allPost flex-container">
            <div class="postUserId">
            <h2>userID: ${i.userId}</h2>
            <h2>ID: ${i.id}</h2>
            </div>
            <div class="postTitle">
            <h2>Title</h2>
            <p>${i.title}</p>
            </div>
            <div class="postBody">
            <h2>Body</h2>
            <p>${i.body}</p>
            </div>
            </div>
            `
        };
        let postContent = document.getElementById("userPost");
        postContent.innerHTML = htmlContent;
    };
    renderUserPostID();
};
