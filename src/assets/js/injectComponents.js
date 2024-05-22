

/* ––––––––––––  INJECT HTML COMPONENTS INTO PAGE  –––––––––––– */

    function injectHTML(url, targetElementId, callback) {
        fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetElementId).innerHTML = data;
            if (callback) {
            callback(); // Call the callback function if provided
            }
        })
        .catch(error => console.error('Error fetching injected HTML:', error));
    }
    

    document.addEventListener("DOMContentLoaded", function() {
        
        // Inject header HTML file into page
        injectHTML('/components/header/header.html', 'headerComponent', function() {

            console.log('Header injected');

            /* ––––––––––––  CONTACT OVERLAY  –––––––––––– */

                var openBtn = document.getElementById('open-contact');
                var closeBtn = document.getElementById('close-contact');

                openBtn.addEventListener('click', function() {
                    document.body.classList.add('noscroll');
                });

                closeBtn.addEventListener('click', function() {
                    document.body.classList.remove('noscroll');
                });

                // Prevent scrolling on touch devices
                var touchStartY = 0;

                function onTouchStart(event) {
                    touchStartY = event.touches[0].clientY;
                }

                function onTouchMove(event) {
                    var touchY = event.touches[0].clientY;
                    var touchDelta = touchY - touchStartY;

                    if (document.body.classList.contains('noscroll')) {
                        event.preventDefault();
                    }
                }

                document.addEventListener('touchstart', onTouchStart, { passive: false });
                document.addEventListener('touchmove', onTouchMove, { passive: false });



                $("#open-contact").click(function() {
                    
                    $(".contact-overlay").removeClass("contact-animation-close");
                    $(".contact-overlay").addClass("contact-animation-open");

                    $("#open-contact").addClass("hide");
                    $("#close-contact").removeClass("hide");

                    $(".contact-component").removeClass("hide");
                    $(".contact-component").removeClass("fade-out");

                    setTimeout(function(){
                        
                        $(".contact-component").addClass("fade-in");

                    }, 200);

                });

                $("#close-contact").click(function() {
                    
                    $(".contact-overlay").removeClass("contact-animation-open");
                    $(".contact-overlay").addClass("contact-animation-close");

                    $("#open-contact").removeClass("hide");
                    $("#close-contact").addClass("hide");

                    $(".contact-component").removeClass("fade-in");
                    $(".contact-component").addClass("fade-out");

                    setTimeout(function(){
                        
                        $(".contact-component").addClass("hide");

                    }, 350);

                });

            /* ––––––––––––  ENDCONTACT OVERLAY  –––––––––––– */

        });

        // Inject footer HTML file into page
        injectHTML('/components/footer/footer.html', 'footerComponent', function() {

            console.log('Footer injected');

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
                        const statusDiv = document.querySelector('#current-availability-indicator');
                        if (hour >= 9 && hour < 17) {
                        statusDiv.style.backgroundColor = 'limegreen';
                        document.querySelector('#current-availability-label').innerHTML = 'Currently available';
                        } else {
                        statusDiv.style.backgroundColor = 'red';
                        document.querySelector('#current-availability-label').innerHTML = 'Currently unavailable';
                        }
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

                async function updateCurrentSong() {
                    try {
                        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=damianpetrov&api_key=${lastfmAPIKey}&format=json`);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await response.json();
                        const currentTrack = data.recenttracks.track[0];
                        const currentSong = currentTrack.name;
                        const currentArtist = currentTrack.artist['#text'];
                        const currentSongDiv = document.getElementById('current-song');
                        let songText = `${currentSong} by ${currentArtist}`;

                        if (songText.length > 30) {
                            songText = songText.substr(0, 27) + '...';
                        }

                        currentSongDiv.innerHTML = `<a href="https://www.google.com/search?q=${currentArtist} ${currentSong}" target="_blank" style="text-decoration: none;">${songText}</a>`;
                    } catch (error) {
                        console.error('Failed to fetch the current song:', error);
                    }
                }

                setInterval(updateCurrentSong, 10 * 1000);
                updateCurrentSong();

            /* ––––––––––––  END CURRENT SPOTIFY SONG WIDGET  –––––––––––– */


            /* ––––––––––––  CURRENT YEAR FOR FOOTER COPYRIGHT  –––––––––––– */

                $(window).on('load', function() {
                    setTimeout(function() {
                        var currentYearElement = document.getElementById("current-year");
                        if (currentYearElement) {
                            currentYearElement.innerHTML = new Date().getFullYear();
                            console.log("Year updated successfully!");
                        } else {
                            console.error("Element with ID 'current-year' not found.");
                        }
                    }, 100);
                });

            /* ––––––––––––  END CURRENT YEAR FOR FOOTER COPYRIGHT  –––––––––––– */

        });
    


        // Inject nav HTML file into page
        injectHTML('/components/nav/nav.html', 'navComponent', function() {

            console.log('Nav injected');

            /* ––––––––––––  TRANSITION TO PAGE –––––––––––– */

                // Trigger Fade out of body content and then directs to page

                $('#about-page').click(function() {
                        
                    $("section").removeClass("fade-in");
                    $("section").addClass("fade-out");

                    $('#design-tab').removeClass("current");
                    $('#dev-tab').removeClass("current");
                    $('#articles-tab').removeClass("current");
                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");


                    $('#about-page').addClass("current");

                });

                if (window.location.pathname === '/' || '/src') {

                    $('#all-tab').addClass("current");
                    $('#projects-tab').addClass("current");
                    $('#about-page').addClass("link-delay");

                }

                if (window.location.href.split('/').pop().split('_').some(part => ['biker', 'hella', 'wednesday', 'cbco'].some(keyword => part.includes(keyword)))) {

                    $('#design-tab').addClass("current");
                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");


                    $('#about-page').addClass("link-delay");
                    $('#all-tab').addClass("link-delay");
                    $('#design-tab').addClass("link-delay");
                    $('#dev-tab').addClass("link-delay");
                    $('#articles-tab').addClass("link-delay");
                    $('#projects-tab').addClass("link-delay");

                }

                if (window.location.href.split('/').pop().split('_').some(part => ['api', 'full', 'portfolio', 'raw'].some(keyword => part.includes(keyword)))) {

                    $('#dev-tab').addClass("current");
                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");


                    $('#about-page').addClass("link-delay");
                    $('#all-tab').addClass("link-delay");
                    $('#design-tab').addClass("link-delay");
                    $('#dev-tab').addClass("link-delay");
                    $('#articles-tab').addClass("link-delay");
                    $('#projects-tab').addClass("link-delay");

                }

                if (window.location.href.includes("articles")) {

                    $('#articles-tab').addClass("current");
                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");


                    $('#about-page').addClass("link-delay");
                    $('#all-tab').addClass("link-delay");
                    $('#design-tab').addClass("link-delay");
                    $('#dev-tab').addClass("link-delay");
                    $('#articles-tab').addClass("link-delay");
                    $('#projects-tab').addClass("link-delay");

                }

                if (window.location.href.includes("about")) {

                    $('#about-page').addClass("current");
                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");

                    $('#all-tab').addClass("link-delay");
                    $('#projects-tab').addClass("link-delay");
                    $('#design-tab').addClass("link-delay");
                    $('#dev-tab').addClass("link-delay");
                    $('#articles-tab').addClass("link-delay");

                            
                    $('#articles-tab').click(function() {
                        
                        $("section").removeClass("fade-in");
                        $("section").addClass("fade-out");

                    });
                    $('#dev-tab').click(function() {
                        
                        $("section").removeClass("fade-in");
                        $("section").addClass("fade-out");

                    });
                    $('#design-tab').click(function() {
                        
                        $("section").removeClass("fade-in");
                        $("section").addClass("fade-out");

                    });
                    $('#all-tab').click(function() {
                        
                        $("section").removeClass("fade-in");
                        $("section").addClass("fade-out");

                    });
                    $('#projects-tab').click(function() {
                        
                        $("section").removeClass("fade-in");
                        $("section").addClass("fade-out");

                    });
                    
                }   
            
                setTimeout(function(){
                    
                    $("section").addClass("fade-in");
                    $("article").addClass("fade-in");


                }, 600);


            /* ––––––––––––  END TRANSITION TO PAGE  –––––––––––– */



            /* ––––––––––––  ALL TAB FADE IN  –––––––––––– */

                if (window.location.href.endsWith("#all")) {
                    $('#design-tab').removeClass("current");
                    $('#dev-tab').removeClass("current");
                    $('#articles-tab').removeClass("current");
                    $('#about-page').removeClass("current");

                    $('#all-tab').addClass("current");
                    $('#projects-tab').addClass("current");

                    $('#about-page').addClass("link-delay");

                    
                    setTimeout(function(){
                        
                        $(".bento-design").addClass("hide");
                        $(".bento-dev").addClass("hide");
                        $(".bento-articles").addClass("hide");
                        $(".bento-all").removeClass("hide");

                    }, 400);

                    setTimeout(function(){
                        
                        $(".tile").addClass("fade-in");

                    }, 500);
                }


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

                    $('#about-page').addClass("link-delay");

                    
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

                if (window.location.href.endsWith("#design")) {
                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");
                    $('#dev-tab').removeClass("current");
                    $('#articles-tab').removeClass("current");
                    $('#about-page').removeClass("current");

                    $('#design-tab').addClass("current");

                    $('#about-page').addClass("link-delay");
                    
                    setTimeout(function(){
                        
                        $(".bento-all").addClass("hide");
                        $(".bento-dev").addClass("hide");
                        $(".bento-articles").addClass("hide");
                        $(".bento-design").removeClass("hide");

                    }, 400);

                    setTimeout(function(){
                        
                        $(".tile").addClass("fade-in");

                    }, 500);
                }


                // Trigger Fade out of all tiles and then fade in of all DESIGN tiles

                $("#design-tab").click(function() {
                    
                    $(".tile").removeClass("fade-in");
                    $(".tile").addClass("fade-out");

                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");
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

                if (window.location.href.endsWith("#dev")) {
                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");
                    $('#design-tab').removeClass("current");
                    $('#articles-tab').removeClass("current");
                    $('#about-page').removeClass("current");

                    $('#dev-tab').addClass("current");

                    $('#about-page').addClass("link-delay");
                    
                    setTimeout(function(){
                        
                        $(".bento-all").addClass("hide");
                        $(".bento-design").addClass("hide");
                        $(".bento-articles").addClass("hide");
                        $(".bento-dev").removeClass("hide");

                    }, 400);

                    setTimeout(function(){
                        
                        $(".tile").addClass("fade-in");

                    }, 500);
                }



                // Trigger Fade out of all tiles and then fade in of all DEV tiles

                $("#dev-tab").click(function() {
                    
                    $(".tile").removeClass("fade-in");
                    $(".tile").addClass("fade-out");

                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");
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

                if (window.location.href.endsWith("#articles")) {
                    $('#all-tab').removeClass("current");
                    $('#projects-tab').removeClass("current");
                    $('#design-tab').removeClass("current");
                    $('#dev-tab').removeClass("current");
                    $('#about-page').removeClass("current");

                    $('#articles-tab').addClass("current");

                    $('#about-page').addClass("link-delay");
                    
                    setTimeout(function(){
                        
                        $(".bento-all").addClass("hide");
                        $(".bento-design").addClass("hide");
                        $(".bento-dev").addClass("hide");
                        $(".bento-articles").removeClass("hide");

                    }, 400);

                    setTimeout(function(){
                        
                        $(".tile").addClass("fade-in");

                    }, 500);
                }


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

        });
    
    });

/* ––––––––––––  END INJECT HTML COMPONENTS INTO PAGE  –––––––––––– */
