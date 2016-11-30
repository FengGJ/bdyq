$(function () {
    var clientH = $(window).height();
    var num = 0;
    var flag = true;

    $(".min .middle").height(clientH);
    $(".fp-img").height(clientH);

    $(window).resize(function(){
        clientH = $(window).height();
        console.log(clientH);
        $(".min .middle").height(clientH);
        $(".fp-img").height(clientH);
        $(".fullpage").css("marginTop", (-num * clientH) + "px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");
    })

    /*$(document).mousedown(function(e){
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
     })*/

    touch.on("body", "swipeup", ".fullpage", function (e) {
        if (!flag) {
            return;
        }
        num++;
        if (num >= $("section").length) {
            num = $("section").length - 1;
            return;
        }
        flag = false;

        if (num > 0) {
            $(".hidden").css("opacity", "1")
            $(".ship").css("left", "260px")
        } else {
            $(".hidden").css("opacity", "0")
            $(".ship").css("left", "300px")
        }


        $(".fullpage").css("marginTop", (-num * clientH) + "px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");


    })
    touch.on("body", "swipedown", ".fullpage", function (e) {
        if (!flag) {
            return;
        }
        num--;
        if (num < 0) {
            num = 0;
            return;
        }
        flag = false;

        if (num > 0) {
            $(".hidden").css("opacity", "1")
            $(".ship").css("left", "260px")
        } else {
            $(".hidden").css("opacity", "0")
            $(".ship").css("left", "300px")
        }

        $(".fullpage").css("marginTop", (-num * clientH) + "px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");
    })


    $("section").find(".next-page").click(function () {
        console.log(num)
        console.log(clientH)
        $(".fullpage").css("margin-top", (-num * clientH) + "px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");
    })
    if (num == 0) {
        $("section").not($("section").eq(num)).find(".side-image").css({
            opacity: "0",
            transform: "translateX(100px)"
        })
        $("section").not($("section").eq(num)).find(".title").css({
            opacity: "0",
            transform: "translateX(-100px)"
        })
    }


    $(".fullpage")[0].addEventListener("webkitTransitionEnd", function () {
        flag = true;


        $("section").not($("section").eq(num)).find(".side-image").css({
            opacity: "0",
            transform: "translateX(100px)"
        })
        $("section").not($("section").eq(num)).find(".title").css({
            opacity: "0",
            transform: "translateX(-100px)"
        })

        if (num == 0) {
            return;
        } else {
            $("section").eq(0).find(".title").css({
                opacity: "1",
                transform: "translateX(0)"
            })
            $("section").eq(0).find(".side-image").css({
                opacity: "1",
                transform: "translateX(0)"
            })
        }

        $("section").eq(num).find(".title").css({
            opacity: "1",
            transform: "translateX(0)"
        })
        $("section").eq(num).find(".side-image").css({
            opacity: "1",
            transform: "translateX(0)"
        })


    }, false)
    $(".fullpage")[0].addEventListener("mozTransitionEnd", function () {
        flag = true;


    }, false)


    //菜单点击

    function menu_control() {
        if ($(".menu").attr("class") == "menu active") {
            flag_menu = true;
            $(".min .middle").css({
                transform: "translateX(0)",
                opacity: "1"
            });
            $(".min .middle li").each(function (index, obj) {
                $(obj).css({
                    transform: "translateX(0)",
                    opacity: "1",
                    transition: "transform,opacity .5s,.5s ease " + index * 80 + "ms"
                }).find("a").css({
                    transform: " scale(1)",
                    transition: "transform .5s ease " + index * 80 + "ms"
                })
            })

        } else {
            $(".min .middle").css({
                transform: "translateX(300px)",
                opacity: "0.3"
            })
            $(".min .middle li").each(function (index, obj) {
                index = 8 - index;
                $(obj).css({
                    transform: "translateX(80px) ",
                    opacity: "0",
                    transition: "transform,opacity .5s,.5s ease " + index * 80 + "ms"
                }).find("a").css({
                    transform: "scale(1.2)",
                    transition: "transform .5s ease " + index * 100 + "ms"
                })
            })
        }
    }


    var flag_menu = true;
    $(".menu").click(function () {
        $(".menu").toggleClass("active").find("span").css({
            transition: "transform .3s ease .3s"
        })
        $(".min .middle").css({
            transition: "transform,opactiy 1s,1s ease"
        })
        menu_control()

    })
    $(window).resize(function () {
        $(".menu").removeClass("active")
        menu_control()
    })


    //点击

    $("section").find(".next-page").click(function () {
        num++;
        if (num > 0) {
            $(".hidden").css("opacity", "1")
            $(".ship").css("left", "260px")
        } else {
            $(".hidden").css("opacity", "0")
            $(".ship").css("left", "300px")
        }
        $(".fullpage").css("marginTop", (-num * clientH) + "px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");

    })
    $(".fp-nav li").click(function () {
        var index=$(this).index();
        num=index;
        if (num > 0) {
            $(".hidden").css("opacity", "1")
            $(".ship").css("left", "260px")
        } else {
            $(".hidden").css("opacity", "0")
            $(".ship").css("left", "300px")
        }
        $(".fullpage").css("marginTop", (-num * clientH) + "px");
        $(".fp-nav li").removeClass("active").eq(num).addClass("active");

    })
})


