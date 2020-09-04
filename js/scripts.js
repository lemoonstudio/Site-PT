

// REMOVE COISAS INICIO

if (window.innerWidth<768){
    $(".line-horizontal").remove();
}

if (window.innerWidth<768){
    $(".remove").remove();
}

// REMOVE COISAS FIM

// REMOVE CLASSE MOUSE INICIO

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".scroll-down").addClass("hide");
    }
}); //missing );

// REMOVE CLASSE MOUSE FIM