$(function(){
    var clientH=$(window).height();
    var num=0;
    var flag=true;
    $(document).mouseup(function(e){
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue=false;
        }
    })
    $(document).mousemove(function(e){
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue=false;
        }
    })
    touch.on("body","swipeup",".fullpage",function(e){
        if(!flag){
            return;
        }
        num++;
        if(num>=$("section").length){
            num=$("section").length-1;
            return;
        }
        if(num>0){
            $(".hidden").css("opacity","1")
            $(".ship").css("left","260px")

        }else{
            $(".hidden").css("opacity","0")
            $(".ship").css("left","300px")
        }
                flag=false;

        $(".fullpage").css("marginTop",(-num*clientH)+"px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");

    })
    touch.on("body","swipedown",".fullpage",function(e){
        if(!flag){
            return;
        }
        num--;
        if(num<0){
            num=0;
            return;
        }
        if(num>0){
            $(".hidden").css("opacity","1")
            $(".ship").css("left","260px")

        }else{
            $(".hidden").css("opacity","0")
            $(".ship").css("left","300px")
        }
                flag=false;

        $(".fullpage").css("marginTop",(-num*clientH)+"px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");
    })

    $("section").find(".next-page").click(function(){
        console.log(num)
        console.log(clientH)
        $(".fullpage").css("margin-top",(-num*clientH)+"px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");
    })

    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    },false)
    $(".fullpage")[0].addEventListener("mozTransitionEnd",function(){
        flag=true;
    },false)
})


