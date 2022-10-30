

if(window.innerWidth > 992) {
    $((function(){var t,a=["#00EAFF"];function o(t){$(t).css({top:$(t).parent().height()*Math.random()-10+"px",left:$(t).parent().width()*Math.random()-10+"px",background:a[Math.floor(Math.random()*a.length)]})}$("[data-dots]").each((function(){if($(this).attr("data-dots")){t=$(this).attr("data-dots");for(var a=0;a<t;a++)$(this).append('<div class="random-dot"></div>')}})),$(".random-dot").each((function(t){o($(this)),$(this).get(0).style.setProperty("--delay",t/16+"s"),setTimeout((()=>{$(this).get(0).style.setProperty("--delay","0s")}),2e3),$(this).addClass("fadeIn")})),$(".random-dot").on("mouseover",(function(){$(this).removeClass("fadeIn"),setTimeout((()=>{o($(this)),$(this).addClass("fadeIn")}),250)}))}));

}