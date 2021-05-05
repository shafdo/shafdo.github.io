
$("#load-more-btn").click(function (e) { 
    e.preventDefault();
    
    if($("#load-more-btn").hasClass("clicked")){
        // collapse
        $("#load-more-btn").removeClass("clicked");
        $("#cert-list-2").addClass("d-none");

        $("#load-more-btn").removeClass("red");
        $("#load-more-btn").addClass("violet");
        $("#load-more-btn").text("Load More");
        
    }else{
        // expand
        $("#cert-list-2").removeClass("d-none");
        $("#load-more-btn").addClass("clicked");
        
        $("#load-more-btn").removeClass("violet");
        $("#load-more-btn").addClass("red");
        $("#load-more-btn").text("Collapse");

    }

});