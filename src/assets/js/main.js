
$(window).on('load', function() {


/* ––––––––––––  TILES FADE IN  –––––––––––– */
    
    // Fade in all tiles on page load after a delat of .7s

    setTimeout(function(){
            
        $(".tile").addClass("fade-in");

    }, 600);

/* ––––––––––––  END TILES FADE IN  –––––––––––– */




/* ––––––––––––  DELAY LINK REDIRECT FOR TRANSITION  –––––––––––– */

$('.link-delay').click(function(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    setTimeout(function(url) { window.location = url }, 800, this.href)
});


$(".link-delay").click(function() {
        
    $("section").removeClass("fade-in");
    $("section").addClass("fade-out");
    $("article").removeClass("fade-in");
    $("article").addClass("fade-out");

});

/* ––––––––––––  END DELAY LINK REDIRECT FOR TRANSITION –––––––––––– */



/* ––––––––––––  HOVER TILE IMAGE SCALE –––––––––––– */

    $('.tile').mouseover(function() {

        $(this).find('.tile-image').css('transform', 'scale(1.08)');
    });

    $('.tile').mouseout(function() {

        $(this).find('.tile-image').css('transform', 'scale(1)');
    });

/* ––––––––––––  END HOVER TILE IMAGE SCALE –––––––––––– */



/* ––––––––––––  TILE LABEL VIEWABLE ON SCROLL  –––––––––––– */

    // Check if the device supports touch input
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    }

    // Function to check if an element's position is within the active area
    function isInActiveArea(element) {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const elementRect = element.getBoundingClientRect();
        const scrollPosition = window.scrollY || window.pageYOffset;
        const elementBottom = elementRect.bottom + scrollPosition;
        const thresholdTop = scrollPosition + (14 * parseFloat(getComputedStyle(document.documentElement).fontSize)); // 10rem from the top
        const thresholdBottom = scrollPosition + viewportHeight - (6 * parseFloat(getComputedStyle(document.documentElement).fontSize)); // 20rem from the bottom

        return (
            (elementBottom > thresholdTop && elementBottom < thresholdBottom)
        );
    }

    // Toggle active class based on whether the element is in the active area and on a touch device
    function toggleActiveClass() {
        const isTouch = isTouchDevice();
        if (!isTouch) return; // Exit if not a touch device

        const tileLabels = document.querySelectorAll('.tile-label');
        tileLabels.forEach(function(tileLabel) {
            if (isInActiveArea(tileLabel)) {
                tileLabel.classList.add('active');
            } else {
                tileLabel.classList.remove('active');
            }
        });
    }

    // Initial call to toggleActiveClass to set initial state
    toggleActiveClass();

    // Add event listener for scroll and resize to continuously check if elements are in viewport
    window.addEventListener('scroll', toggleActiveClass);
    window.addEventListener('resize', toggleActiveClass);

/* ––––––––––––  END TILE LABEL VIEWABLE ON SCROLL  –––––––––––– */





});


