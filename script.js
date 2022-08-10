//NAVBAR BLUE BALLS
// function shakeBlueBalls1() {
//     const allBallsJPGs = document.getElementsByClassName("blueBallsJPG");
//     for (let i = 0, timeStep = 0; i < allBallsJPGs.length; i++) {
//         setTimeout(shakeOneBall, timeStep, allBallsJPGs[i].id);
//         timeStep += 1000;
//     }
// }

// function shakeBlueBalls1() {
//     const allBallsJPGs = document.getElementsByClassName("blueBallsJPG");
//     for (let i = 0; i < allBallsJPGs.length; i++) {
//         shakeOneBall(allBallsJPGs[i].id);
//     }
// }

// function shakeOneBall(ballJPGid) {
//     const GIFid = ballJPGid.replace("JPG", "GIF");
//     document.getElementById(ballJPGid).style.display = "none";
//     document.getElementById(GIFid).style.display = "inline-block";
//     setTimeout(showJPG, 1350, ballJPGid); 
//     function showJPG(jpg) {
//         document.getElementById(jpg).style.display = "inline-block";
//     }
//     setTimeout(hideGIF, 1350, GIFid); 
//     function hideGIF(gif) {
//         document.getElementById(gif).style.display = "none";
//     }
// }



//MENU
let menuState = 'closed';
// let videoState = 'off';
function menuShowOrHide() {
    let menuDiv = document.getElementById("menuDIV");
    let menuDiv2 = document.getElementById("menuDIV2");

    // let pic = document.getElementById("blueBallJPG");
    // let vid = document.getElementById("ballsVID");

    document.getElementById("navBar").style.backgroundColor = "black"; 

    if (menuState === 'closed') {
        menuShow();
        document.getElementById("blueBallsGIF").src = "blueBalls.gif"; 
        // vid.play();
    }
    else if (menuState === 'opened') {
        menuHide();
        // vid.play();
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

    // function startVideo() {
    //         vid.play();
    //         setTimeout(vid.pause(), 300);
    //     }

    // function startVideo() {
    //     pic.style.display = 'none';
    //     vid.style.display = 'inline-block';
    //     vid.play();
    //     setTimeout(vid.pause(), 500);
    // }
    // function endVideo() {
    //     vid.play();
    //     setTimeout(hideVidShowPic(), 500);
    //     function hideVidShowPic() {
    //         vid.style.display = 'none';
    //         pic.style.display = 'inline-block';
    //     }
    // }

}
