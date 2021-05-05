
async function getblogs() {
    const pinned_posts = [];
    const other_posts = [];
    const blog_container = document.querySelector("#blogs-container")

    await db.collection("blog").orderBy('blog_date').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            const blog_title = DOMPurify.sanitize(doc.data().blog_title)
            let blog_date = doc.data().blog_date
            const blog_desc = DOMPurify.sanitize(doc.data().blog_desc)
            const blog_image = DOMPurify.sanitize(doc.data().blog_image)
            const blog_location = DOMPurify.sanitize(doc.data().blog_location)
            
            if(blog_date == "pinned"){
                pinned_posts.push(`<div data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="200" class="col m-3"><div class="d-block mx-auto ui card" style="width: 18rem;z-index: 0;"><div class="image"><h6 class="date">${blog_date}</h6><div class="overlay-card"></div><img class="ui image medium" src="${blog_image}"></div><div class="content"><a class="header mb-2" href="${blog_location}">${blog_title}</a><p class="card-text">${blog_desc}</p></div></div></div>`)
            }else{
                blog_date = DOMPurify.sanitize(blog_date.toDate().toDateString())
                other_posts.unshift(`<div data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="200" class="col m-3"><div class="d-block mx-auto ui card" style="width: 18rem;z-index: 0;"><div class="image"><h6 class="date">${blog_date}</h6><div class="overlay-card"></div><img class="ui image medium" src="${blog_image}"></div><div class="content"><a class="header mb-2" href="${blog_location}">${blog_title}</a><p class="card-text">${blog_desc}</p></div></div></div>`)
            }
        });
    });

    pinned_posts.forEach(post => {
        blog_container.innerHTML += post;
    });


    other_posts.forEach(post => {
        blog_container.innerHTML += post;
    });
}



getblogs().then(()=>{
    $("#loader").addClass("d-none");
})
