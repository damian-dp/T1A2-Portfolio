 
$(document).ready(function(){
    
    // Trigger Fade In animation for all tiles on document load
    setTimeout(function(){
            
        $(".tile").addClass("fade-in");

    }, 700);


    // ALL TAB –––– Trigger Fade out of all tiles and then fade in of all DESIGN tiles
    $("#all-tab").click(function() {
        
        $(".tile").removeClass("fade-in");
        $(".tile").addClass("fade-out");

        $('#design-tab').removeClass("current");
        $('#dev-tab').removeClass("current");
        $('#articles-tab').removeClass("current");

        $('#all-tab').addClass("current");

        
        setTimeout(function(){
            
            $(".bento-design").addClass("hide");
            $(".bento-dev").addClass("hide");
            $(".bento-articles").addClass("hide");
            $(".bento-all").removeClass("hide");

        }, 400);

        setTimeout(function(){
            
            $(".tile").removeClass("fade-out");
            $(".tile").addClass("fade-in");

        }, 410);

    }); 


    // DESIGN TAB –––– Trigger Fade out of all tiles and then fade in of all DESIGN tiles
    $("#design-tab").click(function() {
        
        $(".tile").removeClass("fade-in");
        $(".tile").addClass("fade-out");

        $('#all-tab').removeClass("current");
        $('#dev-tab').removeClass("current");
        $('#articles-tab').removeClass("current");

        $('#design-tab').addClass("current");

        
        setTimeout(function(){
            
            $(".bento-all").addClass("hide");
            $(".bento-dev").addClass("hide");
            $(".bento-articles").addClass("hide");
            $(".bento-design").removeClass("hide");

        }, 400);

        setTimeout(function(){
            
            $(".tile").removeClass("fade-out");
            $(".tile").addClass("fade-in");

        }, 410);

    }); 

});