$(".menu").click(function () {
    $(".menu").toggleClass("active");
    $(".navbar-menu").toggleClass("active");
    $(".menu-listing li").toggleClass("active_li");
    $(".menu span:before").toggleClass("toggle_black");
    $(".icons_in_nav  ").toggleClass("icons_nav_noshow");
    $("html").toggleClass("html_overflow");
    $(".icons ").toggleClass("icons_side_hidenav");
    $(".email_nav ").toggleClass("email_nav_show");
    $("#logo ").toggleClass("logo_nav_fixed");
});


$(".menu-listing li").click(function () {
    $(".menu").toggleClass("active");
    $(".navbar-menu").toggleClass("active");
    $(".menu-listing li").toggleClass("active_li");

})




$("#bar_drinks").mouseenter(function () {
    $(this).animate({
        width: '400px',
        height: '600px',

    }, 500)


})
$("#bar_drinks").mouseleave(function () {
    $(this).animate({
        width: '200px',
        height: '600px'
    }, 500)

})


$("#bar_food").mouseenter(function () {
    $(this).animate({
        width: '400px',
        height: '600px',

    }, 500)


})
$("#bar_food").mouseleave(function () {
    $(this).animate({
        width: '200px',
        height: '600px'
    }, 500)

})







$("#bar_dj").mouseenter(function () {
    $(this).animate({
        width: '400px',
        height: '600px',

    }, 500)


})
$("#bar_dj").mouseleave(function () {
    $(this).animate({
        width: '200px',
        height: '600px'
    }, 500)

})









$("#bar_team").mouseenter(function () {
    $(this).animate({
        width: '400px',
        height: '600px',

    }, 500)


})
$("#bar_team").mouseleave(function () {
    $(this).animate({
        width: '200px',
        height: '600px'
    }, 500)

})




function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:52.2402, lng: 150.644 },
    zoom: 8
  });
}







