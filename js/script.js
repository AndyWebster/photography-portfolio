function menuHide() {
    // document.getElementById("more-content").style.opacity = "0";
    // document.getElementById("more-content").style.visibility = "hidden";
    console.log("Menu hidden")
}

function arrowUpVisibility() {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        document.getElementById("arrow-up").style.opacity = "1";
    } else {
        document.getElementById("arrow-up").style.opacity = "0";
    }
}
function scrollHidden() {
    document.getElementById("logo-box").style.opacity = "0.4";
    document.getElementById("more").style.opacity = "0.4";
    document.getElementById("arrow-up").style.opacity = "0.4";
    document.getElementById("arrow-down").style.opacity = "0.4";
}
function scrollVisible() {
    document.getElementById("logo-box").style.opacity = "1";
    document.getElementById("more").style.opacity = "1";
    document.getElementById("arrow-down").style.opacity = "1";
    arrowUpVisibility();
}

var scrolling = false;

$( window ).scroll( function() {
    scrolling = true; 
});

setInterval( function() {
    if ( scrolling ) {
        scrolling = false;
        arrowUpVisibility(); 
        changeColor();
        scrollHidden();
    } else {
        scrollVisible();
    }
}, 50 );


function changeColor() {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        
        //document.getElementById("logo").style.fill = "#fff";
        document.getElementById("logo_black").style.visibility = "hidden";
        document.getElementById("logo_black").style.width = "0";

        document.getElementById("logo_white").style.visibility = "visible";
        document.getElementById("logo_white").style.width = "3rem";

        document.getElementById("logo-box").style.color = "#fff";
        document.getElementById("more-btn").style.color = "#fff";

        document.getElementById("arrow-down").style.color = "#fff";
        document.getElementById("arrow-down").style.border = "3px #fff solid";
       
        document.getElementById("arrow-up").style.color = "#fff";
        document.getElementById("arrow-up").style.border = "3px #fff solid";


    } else {
        //document.getElementById("logo").style.fill = "#222";

        document.getElementById("logo_white").style.visibility = "hidden";
        document.getElementById("logo_white").style.width = "0";

        document.getElementById("logo_black").style.visibility = "visible";
        document.getElementById("logo_black").style.width = "3rem";

        document.getElementById("logo-box").style.color = "#222";
        document.getElementById("more-btn").style.color = "#222";
        
        document.getElementById("arrow-down").style.color = "#222";
        document.getElementById("arrow-down").style.border = "3px #222 solid";

        document.getElementById("arrow-up").style.color = "#222";
        document.getElementById("arrow-up").style.border = "3px #222 solid";


    }
}