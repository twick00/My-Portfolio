$(function() {
    $("#home-button").click(function () {
        $("#home").show();
        $("#projects").hide();
        $("#about-me").hide();
        $("#contact").hide();
        // $("#home-button").addClass("selected-button");
        // $("#projects-button").removeClass("selected-button");
        // $("#aboutme-button").removeClass("selected-button");
        // $("#contact-button").removeClass("selected-button");

    })
    $("#projects-button").click(function() {
        $("#projects").show();
        $("#home").hide();
        $("#about-me").hide();
        $("#contact").hide();
        // $("#home-button").removeClass("selected-button");
        // $("#projects-button").addClass("selected-button");
        // $("#aboutme-button").removeClass("selected-button");
        // $("#contact-button").removeClass("selected-button");
    })
    $("#aboutme-button").click(function () {
        $("#home").hide();
        $("#projects").hide();
        $("#about-me").show();
        $("#contact").hide();
        // $("#home-button").removeClass("selected-button");
        // $("#projects-button").removeClass("selected-button");
        // $("#aboutme-button").addClass("selected-button");
        // $("#contact-button").removeClass("selected-button");
    })
    $("#contact-button").click(function () {
        $("#home").hide();
        $("#projects").hide();
        $("#about-me").hide();
        $("#contact").show();
        // $("#home-button").removeClass("selected-button");
        // $("#projects-button").removeClass("selected-button");
        // $("#aboutme-button").removeClass("selected-button");
        // $("#contact-button").addClass("selected-button");
    })
})

/*
//This is sliding functions, I don't like how it looks
$(function() {
    $("#home-button").click(function () {
        $("#home").slideDown(); 
        $("#projects").slideUp();
        $("#about-me").slideUp();
        $("#contact").slideUp();
    })
    $("#projects-button").click(function() {
        $("#home").slideUp();
        $("#projects").slideDown();
        $("#about-me").slideUp();
        $("#contact").slideUp();
    })
    $("#aboutme-button").click(function () {
        $("#home").slideUp();
        $("#projects").slideUp();
        $("#about-me").slideDown();
        $("#contact").slideUp();
    })
    $("#contact-button").click(function () {
        $("#home").slideUp();
        $("#projects").slideUp();
        $("#about-me").slideUp();
        $("#contact").slideDown();
        $("#contact-button")
    })
})
*/
