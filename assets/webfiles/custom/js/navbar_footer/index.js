
$(document).ready(function () {
    
    // Navigation Stuff
    $("#navbar").load("/pages/inc/navbar.html");

    setTimeout(() => {
        $("#navbar #hamburger").click(function (e) { 
            if ($(sidenav).hasClass("d-none")) {
                // Unhide
                $("#hamburger").attr("src", "/assets/svg/left-arrow.svg");

                $("#sidenav").removeClass("d-none");
                $("#sidenav").removeClass("animate__bounceOutLeft");

                $("#sidenav").addClass("animate__bounceInLeft");
            } else {
                // hide
                setTimeout(() => {
                    $("#hamburger").attr("src", "/assets/svg/hamburger.svg");
                }, 500);

                $("#sidenav").removeClass("animate__bounceInLeft");

                $("#sidenav").addClass("animate__bounceOutLeft");
                setTimeout(() => {
                    $("#sidenav").addClass("d-none");
                }, 800);
                
            }
        });
    }, 1000);


    // Navigation stuff end


    // Foot stuff
    $("#footer").load("/pages/inc/footer.html");
    // Foot stuff End


});
