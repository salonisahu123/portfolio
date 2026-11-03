$(document).ready(function(){
    // Sticky navbar on scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // Close mobile menu when clicking any menu link
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation for Hero section
    new Typed(".typing", {
        strings: ["Full-Stack Developer", "MERN Stack Developer", "Software Engineer"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });

    // Typing text animation for About section
    new Typed(".typing-2", {
        strings: ["Full-Stack Developer", "Software Engineer", "Problem Solver"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });

    // Interactive Contact Form Handling
    $('#contactForm').on('submit', function(e){
        e.preventDefault();
        
        var name = $('#senderName').val().trim();
        var email = $('#senderEmail').val().trim();
        var subject = $('#msgSubject').val().trim();
        var message = $('#msgBody').val().trim();

        if(!name || !email || !message){
            alert("Please fill in all required fields.");
            return;
        }

        var mailtoUrl = "mailto:salonisahu9644@gmail.com?subject=" + 
                        encodeURIComponent(subject + " - Portfolio Inquiry from " + name) + 
                        "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

        $('#formStatus')
            .removeClass('error')
            .addClass('success')
            .html('Thank you, <strong>' + name + '</strong>! Your message is ready. Opening your email app... You can also email directly at <a href="mailto:salonisahu9644@gmail.com" style="color: crimson; font-weight: bold; text-decoration: underline;">salonisahu9644@gmail.com</a>.')
            .fadeIn();

        // Redirect to email client after short delay
        setTimeout(function(){
            window.location.href = mailtoUrl;
        }, 600);

        // Reset form
        $('#contactForm')[0].reset();
    });
});
