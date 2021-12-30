$(document).ready(function(){

    //STICKY MENU

    $(".create_sticky_menu").waypoint(function(direction){
        if(direction == "down"){
            $(".navigtion_bar").addClass("sticky");
        }
        else{
            $(".navigtion_bar").removeClass("sticky");
        }
    });

    //MIXITUP
    var mixer = mixitup('.portfolio_detail');


    //SMOOTH SCROLL FOR IE/ EDGE/ SAFARI
    $("a").on('click', function(event) {

        if(this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scrolltop: $(hash).offset().top
                }, 100, function(){
                    window.location.hash = hash;
            });
        }
        
    });
});


//  MOBILE MENU
function openNav(){
    document.querySelector("#mobile_nav").style.width="100%";
}

function closeNav(){
    document.querySelector("#mobile_nav").style.width="0%";
}