var lastScrollTop = 0;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    
    if(scrollTop >= 100) {
        if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {

            $("header").css("top","-120px");
        } else {
            $("header").css("top","0px");
        }

        lastScrollTop = scrollTop;
    } 

});