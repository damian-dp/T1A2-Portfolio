 
$(document).ready(function(){


/* ––––––––––––  TOGGLE DARK MODE  –––––––––––– */

    // Toggle dark mode on and off when click button

    // document.querySelector(".logo").addEventListener("click", () => {
    //     document.querySelector('nav').classList.toggle("dark");
    //     document.querySelector('body').classList.toggle("dark");
    //     document.querySelector('.tile').classList.toggle("dark");
    //     document.querySelector('.current').classList.toggle("dark");
    //     document.querySelector('.logo').classList.toggle("dark");

    // })



    // // Get the toggle button
    // const toggle = document.getElementById("logo");

    // // Get the user's preference from localStorage
    // const darkMode = localStorage.getItem("dark-mode");

    // // Check if the user has already chosen a theme

    //     if (darkMode) {
            
    //         // If yes, apply it to the root element
    //         document.querySelector('nav').classList.toggle("dark");
    //         document.querySelector('body').classList.toggle("dark");
    //         document.querySelector('.current').classList.toggle("dark");
    //         document.querySelector('.logo').classList.toggle("dark");            
        
    //     }
            
    //     // Add an event listener to the toggle button
    //     toggle.addEventListener("click", () => {
        
    //         // Toggle the dark-theme class on the root element
    //         document.querySelector('nav').classList.toggle("dark");
    //         document.querySelector('body').classList.toggle("dark");
    //         document.querySelector('.current').classList.toggle("dark");
    //         document.querySelector('.logo').classList.toggle("dark");
                    
    //         // Store or remove the user's preference in localStorage
    //         if (document.querySelector('body').classList.contains("dark")) {
    //             localStorage.setItem("dark-mode", true);
            
    //         } else {
    //             localStorage.removeItem("dark-mode");
    //         }
    //     });

/* ––––––––––––  END TOGGLE DARK MODE  –––––––––––– */



/* ––––––––––––  TILES FADE IN  –––––––––––– */
    
    // Fade in all tiles on page load after a delat of .7s

    setTimeout(function(){
            
        $(".tile").addClass("fade-in");

    }, 600);

/* ––––––––––––  END TILES FADE IN  –––––––––––– */



/* ––––––––––––  TRANSITION TO PAGE –––––––––––– */

    // Trigger Fade out of body content and then directs to page

    $(".link-delay").click(function() {
        
        $("section").removeClass("fade-in");
        $("section").addClass("fade-out");
        $("article").removeClass("fade-in");
        $("article").addClass("fade-out");

    });

    setTimeout(function(){
        
        $("section").addClass("fade-in");
        $("article").addClass("fade-in");


    }, 600);

/* ––––––––––––  END ALL TAB FADE IN  –––––––––––– */



/* ––––––––––––  ALL TAB FADE IN  –––––––––––– */

    // Trigger Fade out of all tiles and then fade in of all ALL tab tiles

    $("#all-tab").click(function() {
        
        $(".tile").removeClass("fade-in");
        $(".tile").addClass("fade-out");

        $('#design-tab').removeClass("current");
        $('#dev-tab').removeClass("current");
        $('#articles-tab').removeClass("current");
        $('#about-page').removeClass("current");

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

        }, 500);

    }); 
/* ––––––––––––  END ALL TAB FADE IN  –––––––––––– */



/* ––––––––––––  PROJECTS TAB FADE IN  –––––––––––– */

    // Trigger Fade out of all tiles and then fade in of all PROJECTS tab tiles

    $("#projects-tab").click(function() {
        
        $(".tile").removeClass("fade-in");
        $(".tile").addClass("fade-out");

        $('#articles-tab').removeClass("current");
        $('#about-page').removeClass("current");


        $('#projects-tab').addClass("current");

        
        setTimeout(function(){
            
            $(".bento-articles").addClass("hide");
            $(".bento-all").removeClass("hide");

        }, 400);

        setTimeout(function(){
            
            $(".tile").removeClass("fade-out");
            $(".tile").addClass("fade-in");

        }, 500);

    }); 
/* ––––––––––––  END ALL TAB FADE IN  –––––––––––– */



/* ––––––––––––  DESIGN TAB FADE IN  –––––––––––– */

    // Trigger Fade out of all tiles and then fade in of all DESIGN tiles

    $("#design-tab").click(function() {
        
        $(".tile").removeClass("fade-in");
        $(".tile").addClass("fade-out");

        $('#all-tab').removeClass("current");
        $('#dev-tab').removeClass("current");
        $('#about-page').removeClass("current");
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

        }, 500);

    }); 

/* ––––––––––––  END DESIGN TAB FADE IN  –––––––––––– */



/* ––––––––––––  DEV TAB FADE IN  –––––––––––– */

    // Trigger Fade out of all tiles and then fade in of all DEV tiles

    $("#dev-tab").click(function() {
        
        $(".tile").removeClass("fade-in");
        $(".tile").addClass("fade-out");

        $('#all-tab').removeClass("current");
        $('#design-tab').removeClass("current");
        $('#about-page').removeClass("current");
        $('#articles-tab').removeClass("current");

        $('#dev-tab').addClass("current");

        
        setTimeout(function(){
            
            $(".bento-all").addClass("hide");
            $(".bento-design").addClass("hide");
            $(".bento-articles").addClass("hide");
            
            $(".bento-dev").removeClass("hide");

        }, 400);

        setTimeout(function(){
            
            $(".tile").removeClass("fade-out");
            $(".tile").addClass("fade-in");

        }, 500);

    }); 

/* ––––––––––––  END DEV TAB FADE IN  –––––––––––– */



/* ––––––––––––  ARTICLES TAB FADE IN  –––––––––––– */

    // Trigger Fade out of all tiles and then fade in of all ARTICLES tiles

    $("#articles-tab").click(function() {
        
        $(".tile").removeClass("fade-in");
        $(".tile").addClass("fade-out");

        $('#all-tab').removeClass("current");
        $('#projects-tab').removeClass("current");
        $('#design-tab').removeClass("current");
        $('#about-page').removeClass("current");
        $('#dev-tab').removeClass("current");

        $('#articles-tab').addClass("current");

        
        setTimeout(function(){
            
            $(".bento-all").addClass("hide");
            $(".bento-design").addClass("hide");
            $(".bento-dev").addClass("hide");

            $(".bento-articles").removeClass("hide");

        }, 400);

        setTimeout(function(){
            
            $(".tile").removeClass("fade-out");
            $(".tile").addClass("fade-in");

        }, 500);

    });

/* ––––––––––––  END ARTICLES TAB FADE IN  –––––––––––– */



/* ––––––––––––  LOCAL TIME WIDGET  –––––––––––– */

    // Display current time in Melbourne, Australia
    // Also update status div BG colour
    
    setInterval(() => {
        fetch('https://worldtimeapi.org/api/timezone/Australia/Melbourne')
        .then(response => response.json())
        .then(data => {
            const timeInMelbourne = new Date(data.datetime);
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Australia/Melbourne' };
            const localTime = timeInMelbourne.toLocaleTimeString('en-AU', options);
            document.querySelector('#local-time').innerHTML = localTime;

            const hour = timeInMelbourne.getHours();
            // const statusDiv = document.querySelector('#current-availability-indicator');
            // if (hour >= 9 && hour < 17) {
            // statusDiv.style.backgroundColor = 'limegreen';
            // document.querySelector('#current-availability-label').innerHTML = 'Currently available';
            // } else {
            // // statusDiv.style.backgroundColor = 'red';
            // // document.querySelector('#current-availability-label').innerHTML = 'Currently unavailable';
            // }
        })
        .catch(error => console.error(error));
    }, 1000);

/* ––––––––––––  END LOCAL TIME WIDGET  –––––––––––– */



/* ––––––––––––  LOCAL WEATHER WIDGET  –––––––––––– */

    // Display current temprature in melbourne via API
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=Melbourne,AU&units=metric&appid=e54292e35cd881e9ae8d38f6450a9038";

    function updateTemperature() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
        // Get the temperature in Celsius
        const temperature = Math.round(data.main.temp);
        // Format the temperature as "15°C"
        const temperatureString = temperature + "°C";
        // Update the contents of the div
        document.querySelector("#local-temp").textContent = temperatureString;
        });
    }

    // Call the updateTemperature function initially
    updateTemperature();

    // Set an interval to call the updateTemperature function every hour (in milliseconds)
    setInterval(updateTemperature, 60 * 60 * 1000);

/* ––––––––––––  END LOCAL WEATHER WIDGET  –––––––––––– */



/* ––––––––––––  CURRENT SPOTIFY SONG WIDGET  –––––––––––– */

    const lastfmAPIKey = '4310677c78bdcb21ee2bad7336645da1';

    function updateCurrentSong() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=damianpetrov&api_key=${lastfmAPIKey}&format=json`, true);


        xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const currentTrack = response.recenttracks.track[0];
            const currentSong = currentTrack.name;
            const currentArtist = currentTrack.artist['#text'];
            const currentSongDiv = document.getElementById('current-song');
            let songText = `${currentSong} by ${currentArtist}`;

            if (songText.length > 30) {
            songText = songText.substr(0, 27) + '...';
            }

            currentSongDiv.innerHTML = `<a href="https://www.google.com/search?q=${currentArtist} ${currentSong}" target="_blank" style="text-decoration: none;">${songText}</a>`;
        }
        };

        xhr.send();
    }

    setInterval(updateCurrentSong, 10 * 1000);
    updateCurrentSong();

/* ––––––––––––  END CURRENT SPOTIFY SONG WIDGET  –––––––––––– */



/* ––––––––––––  CURRENT YEAR for COPYRIGHT  –––––––––––– */

    document.getElementById("current-year").innerHTML = new Date().getFullYear();

/* ––––––––––––  END CURRENT YEAR for COPYRIGHT –––––––––––– */


/* ––––––––––––  DELAY LINK REDIRECT FOR TRANSITION  –––––––––––– */

    $('.link-delay').click(function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        setTimeout(function(url) { window.location = url }, 800, this.href)
    });

/* ––––––––––––  END DELAY LINK REDIRECT FOR TRANSITION –––––––––––– */




$('.tile').mouseover(function() {

    $(this).find('.tile-image').css('transform', 'scale(1.08)');
});

$('.tile').mouseout(function() {

    $(this).find('.tile-image').css('transform', 'scale(1)');
});



  

});
