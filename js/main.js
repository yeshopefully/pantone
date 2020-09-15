$(function(){

    new WOW({offset:200}).init();

    $("#logo_line_left").css("height", "100%");
    $("#logo_line_top").css("width", "100%");
    $("#logo_line_right").css("height", "100%");
    $("#logo_line_bottom").css("width", "100%");

    setTimeout(function(){
        $("#logo_text > span").css("opacity", 1);
    }, 2000);
    
    $(".product_desc > a").click(function(e){
        e.preventDefault();
    });

    $(window).scroll(function(){
        var t = $(window).scrollTop();
        var bgTop = $(".bigbg_area").offset().top;
        var current = (t - bgTop) / 1000 * 100;
        var left = 100 - current*2 + "%";
        $(".bigbg_area h1").css("left", left)
    })

    jQuery("#bgvideo").YTPlayer({
        videoURL: "UeTNaba14RI",
        containment: '.vid_wrap',
        autoPlay: true,
        mute: true,
        showControls: true,
        loop: true,
        opacity: 1
    });
    
});