$(document).ready(function(){
    
    let count = 0;

    // 更換 Menu 圖示使用，不知道為何無效?
    if( count % 2 == 0){
        $('.menuBtn-pic').attr('src','images/menu.png');
    }else{
        $('.menuBtn-pic').attr('src','images/Close.png');
    }

    // 
    $('.menuBtn').click(function(event){

        //避免觸發 a 標籤：跳轉網頁
        event.preventDefault();

        // 選單展開或收起來
        $('.menu').slideToggle(600);

        count = count+1;

        console.log('我被按了!!'+count);
    });

    
});