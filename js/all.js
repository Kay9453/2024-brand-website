$(document).ready(function(){
    
    let open = false;

    $(".navBtn").click(function(event){

        //避免觸發 a 標籤：跳轉網頁
        event.preventDefault();

        // 選單展開或收起來
        $(".nav").slideToggle(600);

        $(".nav").css("display","flex");

        open = !open;

        if (open) {
            $(".nav-pic").attr("src", "images/Close.png");

        } else {
            $(".nav-pic").attr("src", "images/menu.png");
        }

    });

    // 偵測寬度
    // $(window).on('resize', () => {
    //     if ($( window ).width() >= 992) {
    //         $(".menu").css('display', '');
    //     }
    // })
    
});