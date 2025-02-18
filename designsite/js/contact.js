$(document).ready(function() {
    // フォーム送信ボタンクリック時のアニメーション
    $("form").on("submit", function(event) {
        event.preventDefault(); // 送信を防ぐ（デモ用）
        $(this).fadeOut(500, function() {
            $("<p>送信が完了しました！</p>")
                .css({
                    "color": "#28a745",
                    "text-align": "center",
                    "font-size": "20px",
                    "margin-top": "20px"
                })
                .hide()
                .appendTo(".contact-form")
                .fadeIn(500);
        });
    });

    // 入力フィールドフォーカス時のエフェクト
    $("input, textarea").on("focus", function() {
        $(this).css({
            "border-color": "#ff6b6b",
            "box-shadow": "0 0 5px rgba(255, 107, 107, 0.5)"
        });
    }).on("blur", function() {
        $(this).css({
            "border-color": "#ddd",
            "box-shadow": "none"
        });
    });
});
