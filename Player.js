let canvas;
let ctx;
canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');
canvas.width = 2496;
canvas.height = 1408;
document.body.appendChild(canvas);

let LevelNum = 0;

let Live = 5;
let Coin = 0;
let Time = 0;
let Score = 0;

let PlayerX = 0;
let PlayerY = 18 * 64;
let SavedPMX = 0;
let setEndpointPlayerY = 18 * 64;
let SavedPAS = 0;
let isMax = true;
let PlayerFacing = 1; // -1 == Left, 1 == Right

let PowerUp = 1; // 1 == small, 2 == super, 3 == fire, 4 == cape, ...
let isYoshi = false;

let isEating = false;
let Eating_obj = 'Non';
let Eating_Num = -1;

let isCarrying = false;
let Carrying_obj = 'Non';
let Carrying_Num = -1;

let WalkFra = 0; // Walking Frame
let SpinFra = 0; // Spin Frame
let DiedFra = 0; // Died Frame
let PAS = 0; // Player Animation State

let PMX = 0; // Player Movement X
let PMY = 0; // Player Movement Y

let isJumpPressed = false;
let isSpinPressed = false;

console.log('Hello World!');

// function loadAudio() {
//     overworld = new Audio();
//     overworld.src = 'audios/overworld.mp3';
//     overworld.volume = 0.5;
// }

function Sigmoid(X) {
    return 1 / (1 + Math.exp(-X));
}

let keysDown = {};
function setKeyboardListener() {
    document.addEventListener('keydown', function (event) {
        keysDown[event.keyCode] = true;
    });
    document.addEventListener('keyup', function (event) {
        delete keysDown[event.keyCode];
        if (event.keyCode == 87) {
            // PlayerY -= 64;
            isYoshi = !isYoshi;
        }
        if (event.keyCode == 83) {
            // PlayerY += 64;
            isCarrying = !isCarrying;
        }
    });
}

function GetMovementPlayer() {
    if (74 in keysDown && PMY <= 0) {
        if (!isSpinPressed) {
            if (!isJumpPressed) {
                isMax = false;
                PMY = -12.5;
                SavedPMX = PMX;
                setEndpointPlayerY = PlayerY - 2 * 64 - (Math.abs(PMX) / 8) * 64;
                SavedPAS = PAS;
            } else {
                setEndpointPlayerY -= 4.5;
            }

            isJumpPressed = true;
        }
    } else if (76 in keysDown && (PMY <= 0 || isYoshi)) {
        if (!isCarrying || (!isYoshi && PMY != 0)) {
            if (isYoshi) {
                isYoshi = false;

                isJumpPressed = false;
                isSpinPressed = false;
            }

            if (!isJumpPressed) {
                if (!isSpinPressed) {
                    SpinFra = 0;
                    isMax = false;
                    PMY = -12;
                    SavedPMX = PMX;
                    setEndpointPlayerY = PlayerY - 2 * 64 - (Math.abs(PMX) / 8) * 64;
                } else {
                    setEndpointPlayerY -= 4;
                }

                isSpinPressed = true;
            }
        } else {
            if (isYoshi) {
                isYoshi = false;

                isJumpPressed = false;
            }

            if (!isJumpPressed) {
                isMax = false;
                PMY -= 12.5;
                SavedPMX = PMX;
                setEndpointPlayerY = PlayerY - 2 * 64 - (Math.abs(PMX) / 8) * 64;
                SavedPAS = PAS;
            } else {
                setEndpointPlayerY -= 4.5;
            }

            isJumpPressed = true;
        }
    } else if (PMY == 0) {
        isJumpPressed = false;
        isSpinPressed = false;
    }

    if (
        Level[Math.floor(PlayerX / 64) + Math.floor((PlayerY + 128) / 64) * Level_Width] == '00' &&
        Level[Math.round(PlayerX / 64) + Math.floor((PlayerY + 128) / 64) * Level_Width] == '00'
    ) {
        if (isMax) {
            if (PMY < 15) {
                if (PMY < 0) {
                    PMY = 0;
                }

                PMY += 1;
            } else {
                PMY = 15;
            }
        } else {
            PMY *= Sigmoid(Math.abs(Math.abs(setEndpointPlayerY) - PlayerY / 7.5));
        }
    } else if (PMY > 0) {
        PMY = 0;
        PlayerY = Math.floor(PlayerY / 64) * 64;
    }

    if (PlayerY <= setEndpointPlayerY || PMY >= -1) {
        isMax = true;
    }

    if (83 in keysDown) {
        PMX *= 0.975;
        PAS = 2; // Crouch
        WalkFra = 0;
    } else {
        WalkFra += Math.abs(PMX) * 0.5;

        if (68 in keysDown) {
            if (PMY == 0) {
                PAS = 4; // Walk
            }

            PMX += 0.3;

            if (PMY == 0 || PMX >= Math.abs(SavedPMX)) {
                if (75 in keysDown) {
                    PMX *= 0.99;
                } else {
                    PMX *= 0.95;
                }
            } else if (PMX >= Math.abs(SavedPMX)) {
                PMX *= 1;
            } else {
                PMX += Math.abs(SavedPMX) / 20;
            }

            if (PMX < 0.5 && PMY == 0) {
                if (PMY == 0) {
                    PAS = 3; // Skid
                }
            } else {
                PlayerFacing = 1;
            }
        } else if (65 in keysDown) {
            if (PMY == 0) {
                PAS = 4; // Walk
            }

            PMX -= 0.3;

            if (PMY == 0 || PMX <= -Math.abs(SavedPMX)) {
                if (75 in keysDown) {
                    PMX *= 0.99;
                } else {
                    PMX *= 0.95;
                }
            } else if (PMX <= -Math.abs(SavedPMX)) {
                PMX *= 1;
            } else {
                PMX -= Math.abs(SavedPMX) / 20;
            }

            if (PMX > -0.5 && PMY == 0) {
                if (PMY == 0) {
                    PAS = 3; // Skid
                }
            } else {
                PlayerFacing = -1;
            }
        } else {
            if (!(75 in keysDown) || PMY == 0) {
                PMX *= 0.985;
            } else {
                PMX *= 1.025;
            }

            if (87 in keysDown) {
                PAS = 1; // Up
            } else if (Math.abs(PMX) < 0.25) {
                PAS = 0; // Idle
            } else {
                if (PMY == 0) {
                    PAS = 4; // Walk
                }
            }
        }

        if (!isMax) {
            if (isSpinPressed) {
                PAS = 8;
            } else {
                PAS = 6;
            }
        } else if (PMY > 0) {
            if (isSpinPressed) {
                PAS = 8;
            } else {
                PAS = 7;
            }
        }
    }

    if (WalkFra > 20) {
        WalkFra = 0;
    }

    PMX *= 0.975;

    PlayerX += PMX;

    PlayerY += PMY;

    if (PlayerX < 8) {
        PlayerX = 8;
        PMX = 0;
    }

    if (Math.abs(PMX) >= 7.7 && PMY == 0) {
        PAS = 5;
    }
}

function Player() {
    ctx.drawImage(CSS, 0, 0, 2496, 1408);

    DrawLevel();

    ctx.fillStyle = 'white';
    ctx.font = '64px Arital';
    ctx.fillText(`${PMX}`, 100, 100);
    ctx.fillText(`${PMY}`, 100, 200);
    ctx.fillText(`${PAS}`, 100, 300);
    ctx.fillText(`${setEndpointPlayerY}`, 100, 400);
    ctx.fillText(`${SavedPMX}`, 100, 500);
    ctx.fillText(`${SavedPAS}`, 100, 600);

    GetMovementPlayer();

    RenderPlayer();

    // if(87 in keysDown){
    //     Level[Math.floor(PlayerX / 64) + Math.floor(PlayerY / 64) * Level_Width] = "01";
    // }else if(83 in keysDown){
    //     Level[Math.floor(PlayerX / 64) + Math.floor(PlayerY / 64) * Level_Width] = "00";
    // }

    requestAnimationFrame(Player);
}

loadPlayerImage();

setKeyboardListener();

Player();
