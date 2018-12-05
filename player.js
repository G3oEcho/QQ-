$(function () {
    // alert("Hello World")
    // 1、监听鼠标移入移出
    $(".list_music").hover(function () {
        $(this).find(".list_menu").fadeIn(100);
        $(this).find(".list_time span").fadeOut(100);
        $(this).find(".list_time a").fadeIn(100);
    },function () {
        $(this).find(".list_menu").fadeOut(100);
        $(this).find(".list_time span").fadeIn(100);
        $(this).find(".list_time a").fadeOut(100);
    })
    $(".list_title .list_check i").click(function () {
       $(".list_check i").toggleClass("list_checked");
    });
    $(".list_music .list_check i").click(function () {
        $(this).toggleClass("list_checked");
    });
    $(".music_play").click(function () {
        $(this).toggleClass(".music_play2")
    })
})