$(document).ready(function() {
    // クリックで回転するエフェクト
    $(".gallery-item").on("click", function() {
        $(this).css({
            "transform": "rotateY(360deg)",
            "transition": "transform 1s"
        });
    });

    // スクロール時にフェードイン
    $(window).on("scroll", function() {
        $(".gallery-item").each(function() {
            let position = $(this).offset().top;
            let windowHeight = $(window).height();
            let scrollPos = $(window).scrollTop();

            if (scrollPos + windowHeight - 50 > position) {
                $(this).css("opacity", "1");
            }
        });
    });
});
