//NAVBAR BLUE BALLS
function shakeBlueBalls1() {
    const allBalls = document.getElementsByClassName("blueBallsGIF");
    for (let i = 0, timeStep = 0; i < allBalls.length; i++, timeStep += 200) {
        setTimeout(shakeOneBall, timeStep, allBalls[i].id);
    }
}

function shakeOneBall(ballGIF) {
    document.getElementById(ballGIF).style.display = "inline-block";
    setTimeout(hideGIF, 1350, ballGIF); 
    function hideGIF(gif) {
        document.getElementById(gif).style.display = "none";
    }
}

// function shakeBlueBallsFromLeft() {

//     shakeBlueBall("blueBallsDIV1")
// }

// function shakeBlueBall(ballContainer) {
//     document.getElementsByClassName(ballContainer).style.display = none; 
//     document.getElementById(ballContainer).style.display = none; 
// }

//MENU
let menuState = 'closed';
function menuShowOrHide() {
    let menuDiv = document.getElementById("menuDIV");
    let menuDiv2 = document.getElementById("menuDIV2");

    document.getElementById("navBar").style.backgroundColor = "black"; 

    if (menuState === 'closed') {
        menuShow();
    }
    else if (menuState === 'opened') {
        menuHide();
    }

    function menuShow() {
        // document.getElementById("hamburgerIcon").style.display = "none";
        // document.getElementById("crossIcon").style.display = "inline-block";
        menuDiv.className = "menuDivHidden menuDivHiddenEject";
        menuDiv2.className = "menuDivHidden2 menuDivHiddenEject2";
        menuState = 'opened';
    }
    function menuHide() {
        // document.getElementById("crossIcon").style.display = "none";
        // document.getElementById("hamburgerIcon").style.display = "inline-block";
        menuDiv.className = "menuDivShown";
        menuDiv2.className = "menuDivShown2";
        menuState = 'closed';
    }
}