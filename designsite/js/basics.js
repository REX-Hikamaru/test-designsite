$(document).ready(function() {
    // クリックで要素を強調
    $(".content ul li").on("click", function() {
        $(this).css({
            "background-color": "#ff6b6b",
            "color": "white",
            "transition": "0.5s"
        });
    });

    // スクロールで要素フェードイン
    $(window).on("scroll", function() {
        $(".content ul li").each(function() {
            let position = $(this).offset().top;
            let windowHeight = $(window).height();
            let scrollPos = $(window).scrollTop();

            if (scrollPos + windowHeight - 50 > position) {
                $(this).addClass("visible");
            }
        });
    });
});
