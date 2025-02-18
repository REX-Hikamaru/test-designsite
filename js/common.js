$(document).ready(function() {
    // メニューのホバーエフェクト
    $("nav ul li a").hover(
        function() {
            $(this).css({
                "border-bottom": "2px solid white",
                "transition": "0.3s"
            });
        },
        function() {
            $(this).css("border-bottom", "none");
        }
    );

    // ヘッダーをスクロール時に縮小
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("header").css({
                "padding": "10px",
                "transition": "0.3s"
            });
        } else {
            $("header").css("padding", "20px");
        }
    });

    // フェードインアニメーション（スクロール時）
    $(window).on("scroll", function() {
        $(".hero").each(function() {
            let position = $(this).offset().top;
            let windowHeight = $(window).height();
            let scrollPos = $(window).scrollTop();

            if (scrollPos + windowHeight - 100 > position) {
                $(this).css({
                    "opacity": "1",
                    "transform": "translateY(0)",
                    "transition": "1s"
                });
            }
        });
    });
});
