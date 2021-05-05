
async function fetch_blog_post(bp_t) {

    let blogpost_title = DOMPurify.sanitize(bp_t)

    $("#post-name").text(`# ${blogpost_title}`);
    $("#cwd").text(`${blogpost_title}`);

    
    await db.collection("blog").where("blog_title", "==",blogpost_title).get().then(async (snapshot) => {
        if(snapshot.docs.length == 1){
            snapshot.docs.forEach(doc => {
    
                const db_blogpost_title = DOMPurify.sanitize(doc.data().blogpost_title)
    
                $("title").text(`${db_blogpost_title} || SHAFDO`);
                
                const blogpost_banner = DOMPurify.sanitize(doc.data().blog_image)
                const blogpost_location = DOMPurify.sanitize(doc.data().blog_location)
                
    
                let content = atob(doc.data().content)
                content = DOMPurify.sanitize(content)
                
                // Add banner walpaper
                if(blogpost_banner){
                    $("#banner-wrapper-overlay").html(`<div class="banner-wrapper" style="background-image: url('${blogpost_banner}');"></div>`);
                }else{
                    $("#banner-wrapper-overlay").html(`<div class="banner-wrapper" style="background-image: url('/assets/images/default-backgound.png');background-attachment: initial;"></div>`);
                }
    
                // Add content
                $("#post-container").html(content);
    
                
    
                
                
            });
        }else{
            $(".container").remove();
            $("footer").remove();
            location.assign("/404.html")
        }
    });
}
