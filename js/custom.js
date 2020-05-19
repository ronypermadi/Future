// crafted by wirasakti30
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    //
    $(".image.is-128x128.is-full").click(function () {
        // add new line class for specific jquery selector search
        $(this).addClass(" is-active");
        //get url image for single display banner
        var img_src = $(".image.is-128x128.is-full.is-active").attr('src');
        $(".image.bd-banner-image").attr("src", img_src);
        // remove and restore default class for usable old css
        $(this).removeClass("image is-128x128 is-active").addClass("image is-128x128 is-full");
    })

    //
    $(".image.is-128x128.is-empty").click(function () {
        // on click image will browse open file dialog
        $("#image_browser").click();
        // focus change can triggered submit action
        $("#image_browser").change(function () {
            $("#image_post").submit();
        });
    });
    
});