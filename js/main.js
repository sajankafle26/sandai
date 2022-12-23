$(".mobile-nav").click(function(){
    $("nav ul").toggle()
})
$(window).scroll(function(){
    if($(this).scrollTop()> 250)
    {
        $("header").addClass("sticky")
    }
    else 
    {
        $("header").removeClass("sticky")
    }
})