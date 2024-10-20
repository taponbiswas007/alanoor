(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

$(document).ready(function() {
    $('.nav-link').on('click', function(event) {
        event.preventDefault(); // Prevent the default link click behavior

        var href = $(this).attr('href'); // Get the link's href attribute

        // Set a flag in sessionStorage to indicate the page needs a hard refresh
        sessionStorage.setItem('needsHardRefresh', 'true');

        // Navigate to the target page
        window.location.href = href;
    });

    // Check if the page needs a hard refresh
    if (sessionStorage.getItem('needsHardRefresh') === 'true') {
        // Remove the flag
        sessionStorage.removeItem('needsHardRefresh');

        // Reload the page after 0.5 seconds to force a hard refresh
        setTimeout(function() {
            window.location.reload(true); // true forces the reload from the server
        }, 300); // 0.5 seconds
    }
});


// const playBtn = document.getElementById('play-btn');
// const videoPlayer = document.getElementById('video-player');
// const youtubeVideo = document.getElementById('youtube-video');
// const closeBtn = document.getElementById('close-btn');

// // YouTube video URL with embed format
// const videoUrl = 'https://www.youtube.com/embed/V_SzExu2aV0';

// playBtn.addEventListener('click', function() {
//   youtubeVideo.src = videoUrl;  // Load the video URL
//   videoPlayer.style.display = 'block';  // Show the video player
// });

// closeBtn.addEventListener('click', function() {
//   youtubeVideo.src = '';  // Stop the video
//   videoPlayer.style.display = 'none';  // Hide the video player
// });
// Get elements
const modal = document.getElementById('video-modal');
const openBtn = document.getElementById('open-popup-btn');
const closeBtn = document.getElementById('close-btn');

// Open the modal
openBtn.onclick = function () {
    modal.style.display = 'flex'; // Show modal
}

// Close the modal when user clicks the "x" button
closeBtn.onclick = function () {
    modal.style.display = 'none'; // Hide modal
    const iframe = document.getElementById('youtube-video');
    iframe.src = iframe.src; // Reset the iframe to stop the video
}

// Close the modal if the user clicks outside the video
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // Hide modal
        const iframe = document.getElementById('youtube-video');
        iframe.src = iframe.src; // Reset the iframe to stop the video
    }
}
