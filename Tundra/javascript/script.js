$(document).ready(function(){
		$(function() {
                 $('.banner').unslider({
                        speed: 500,  
                        delay: 4000,
                        
                                        });
              
                  });
       
        
        $("#autor").click(function(){
                        $("#autorinfo").slideToggle("slow");
        });
        
        //BBQLOW
        $("#bbqlowbutton").click(function(){
                $("#bbqlowimg").animate({opacity: 0.0}, 300);
                $("#bbqlowtxt").delay("300").fadeIn("slow");
        });
        $(".backbutton").click(function(){
                $("#bbqlowtxt").fadeOut("fast");
                $("#bbqlowimg").delay("300").animate({opacity: 1.0}, 500);
                       
        });
        
        //BBQHIGH 
        $("#bbqhighbutton").click(function(){
                $("#bbqhighimg").animate({opacity: 0.0}, 300);
                $("#bbqhightxt").delay("300").fadeIn("slow");
        });
        $(".backbutton").click(function(){
                $("#bbqhightxt").fadeOut("fast");
                $("#bbqhighimg").delay("300").animate({opacity: 1.0}, 500);        
        });
        
        //APETIVOLOW
        $("#apetivolowbutton").click(function(){
                $("#apetivolowimg").animate({opacity: 0.0}, 300);
                $("#apetivolowtxt").delay("300").fadeIn("slow");
        });
        $(".backbutton").click(function(){
                $("#apetivolowtxt").fadeOut("fast");
                $("#apetivolowimg").delay("300").animate({opacity: 1.0}, 500);        
        });
        
        //APETIVOHIGH
        $("#apetivohighbutton").click(function(){
                $("#apetivohighimg").animate({opacity: 0.0}, 300);
                $("#apetivohightxt").delay("300").fadeIn("slow");
        });
        $(".backbutton").click(function(){
                $("#apetivohightxt").fadeOut("fast");
                $("#apetivohighimg").delay("300").animate({opacity: 1.0}, 500);        
        });
        
        //HORNA
        $("#hornabutton").click(function(){
                $("#hornaimg").animate({opacity: 0.0}, 300);
                $("#hornatxt").delay("300").fadeIn("slow");
        });
        $(".backbutton").click(function(){
                $("#hornatxt").fadeOut("fast");
                $("#hornaimg").delay("300").animate({opacity: 1.0}, 500);        
        });

});	