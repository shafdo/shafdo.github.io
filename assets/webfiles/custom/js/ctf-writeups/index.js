
async function getblogs() {
    const pinned_posts = [];
    const other_posts = [];
    const blog_container = document.querySelector("#blogs-container")

    await db.collection("ctfs").where("platform", "==","thm").orderBy("blog_date").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            const thm_ctf_title = DOMPurify.sanitize(doc.data().title)
            let thm_ctf_desc = DOMPurify.sanitize(doc.data().blog_desc)
            let thm_ctf_date = doc.data().blog_date
            const thm_ctf_image = DOMPurify.sanitize(doc.data().blog_image)
            const thm_ctf_location = DOMPurify.sanitize(doc.data().location)

            if(thm_ctf_desc.length > 68){
                thm_ctf_desc = thm_ctf_desc.slice(0, 70) + " ...";
            }

            if(thm_ctf_date == "pinned"){
                pinned_posts.push(`<div data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="200" class="col m-3 mb-5"><div class="d-block mx-auto ui card" style="width: 18rem;height: 22rem;z-index: 0;"><div class="image"><h6 class="date">${thm_ctf_date}</h6><div class="overlay-card"></div><img class="ui image medium" src="${thm_ctf_image}"></div><div class="content"><a class="header mb-2" href="${thm_ctf_location}">${thm_ctf_title}</a><p class="card-text">${thm_ctf_desc}</p></div></div></div>`)
            }else{
                thm_ctf_date = DOMPurify.sanitize(thm_ctf_date.toDate().toDateString())
                other_posts.unshift(`<div data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="200" class="col m-3 mb-5"><div class="d-block mx-auto ui card" style="width: 18rem;height: 22rem;z-index: 0;"><div class="image"><h6 class="date">${thm_ctf_date}</h6><div class="overlay-card"></div><img class="ui image medium" src="${thm_ctf_image}"></div><div class="content"><a class="header mb-2" href="${thm_ctf_location}">${thm_ctf_title}</a><p class="card-text">${thm_ctf_desc}</p></div></div></div>`)
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


async function fetch_ctf_writeup(ctf_title) {


    $("#room-name").text(`# ${ctf_title}`);
    $("#cwd").text(`${ctf_title}`);
    $('#room-info').load('/pages/inc/ctfroominfo.html');

    
    await db.collection("ctfs").where("title", "==",ctf_title).get().then(async (snapshot) => {
        if(snapshot.docs.length == 1){
            snapshot.docs.forEach(doc => {
    
                if(doc.data().platform == "thm"){
                    $("title").text(`${ctf_title} tryhackme || SHAFDO`);
                }
                
                const room_info_banner = DOMPurify.sanitize(doc.data().room_info_banner)
                const ctf_url = DOMPurify.sanitize(doc.data().ctf_url)
                
                const room_owner_profile_url = DOMPurify.sanitize(doc.data().room_owner_profile_url)
                const room_owner_profile_pic = DOMPurify.sanitize(doc.data().room_owner_profile_pic)
                const room_owner_profile_name = DOMPurify.sanitize(doc.data().room_owner_profile_name)
                const banner_walpaper = DOMPurify.sanitize(doc.data().banner_walpaper)
    
                let content = atob(doc.data().content)
                content = DOMPurify.sanitize(content)
                
                // Add banner walpaper
                if(banner_walpaper){
                    $("#banner-wrapper-overlay").html(`<div class="banner-wrapper" style="background-image: url('${banner_walpaper}');"></div>`);
                }else{
                    $("#banner-wrapper-overlay").html(`<div class="banner-wrapper" style="background-image: url('/assets/images/default-backgound.png');background-attachment: initial;"></div>`);
                }
    
                // About room
                $("#info-header a").attr("href", ctf_url);
                $("#info-header a img").attr("src", room_info_banner);
    
                // Room owner stuff
                $("#room-owner-profile-pic").attr("src", room_owner_profile_pic);
                $("#room-owner-profile").attr("href", room_owner_profile_url);
                $("#room-owner-profile").text(room_owner_profile_name);
    
                // Add content
                $("#blogs-container").html(content);
                
            });
        }else{
            $(".container").remove();
            $("footer").remove();
            location.assign("/404.html")
        }
    });
}
