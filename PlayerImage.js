function loadPlayerImage() {
    CSS = new Image();
    CSS.src = 'Images/CSS.png';
    MSS = new Image();
    MSS.src = 'Images/Player/MarioSpriteSheet.png';
}

function FlipPlayer() {
    if (PlayerFacing == -1) {
        ctx.scale(-1, 1);
    }
}

function drawPlayer(LI) {
    FlipPlayer();

    if (LI == 'MI' || LI == 'MW2' || LI == 'MSP1') {
        ctx.drawImage(MSS, 4, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MU') {
        ctx.drawImage(MSS, 152, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MC') {
        ctx.drawImage(MSS, 300, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MW1') {
        ctx.drawImage(MSS, 580, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MR1') {
        ctx.drawImage(MSS, 860, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MR2') {
        ctx.drawImage(MSS, 992, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MSK') {
        ctx.drawImage(MSS, 1140, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MJ') {
        ctx.drawImage(MSS, 1288, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MF') {
        ctx.drawImage(MSS, 1420, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MRJ' || LI == 'MRF') {
        ctx.drawImage(MSS, 1568, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MSP2' || LI == 'MCSK') {
        ctx.drawImage(MSS, 1980, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MSP3') {
        ctx.drawImage(MSS, 2112, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MSP4') {
        ctx.drawImage(MSS, 2244, 88, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MSW1') {
        ctx.drawImage(MSS, 4, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MSW2') {
        ctx.drawImage(MSS, 136, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MSW3') {
        ctx.drawImage(MSS, 268, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MCL1') {
        ctx.drawImage(MSS, 416, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MCL2') {
        ctx.drawImage(MSS, 548, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MCL3') {
        ctx.drawImage(MSS, 680, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MSL') {
        ctx.drawImage(MSS, 824, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MDE1') {
        ctx.drawImage(MSS, 972, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MDE2') {
        ctx.drawImage(MSS, 1104, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MVno') {
        ctx.drawImage(MSS, 1252, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MVsh') {
        ctx.drawImage(MSS, 1384, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MVsp') {
        ctx.drawImage(MSS, 1516, 308, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MCI' || LI == 'MCW2' || LI == 'MCR2') {
        ctx.drawImage(MSS, 4, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MCU') {
        ctx.drawImage(MSS, 152, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MCC') {
        ctx.drawImage(MSS, 300, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MCW1' || LI == 'MCR1') {
        ctx.drawImage(MSS, 448, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MCJ' || LI == 'MCF') {
        ctx.drawImage(MSS, 728, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MCSW1') {
        ctx.drawImage(MSS, 1008, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MCSW2') {
        ctx.drawImage(MSS, 1140, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MCSW3') {
        ctx.drawImage(MSS, 1272, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MKI') {
        ctx.drawImage(MSS, 1420, 528, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MYOI' || LI == 'MYOW1' || LI == 'MYOW2' || LI == 'MYOT1' || LI == 'MYOAT3' || LI == 'MYOR1' || LI == 'MYOR2' || LI == 'MYOJ' || LI == 'MYOF') {
        ctx.drawImage(MSS, 4, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MYOC') {
        ctx.drawImage(MSS, 152, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MYOT2') {
        ctx.drawImage(MSS, 432, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MYOT3') {
        ctx.drawImage(MSS, 564, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MYOT4') {
        ctx.drawImage(MSS, 696, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MYOT5') {
        ctx.drawImage(MSS, 828, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MYOAT1') {
        ctx.drawImage(MSS, 976, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MYOAT2') {
        ctx.drawImage(MSS, 1108, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    if (LI == 'MYOVno') {
        ctx.drawImage(MSS, 1256, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MYOVsh') {
        ctx.drawImage(MSS, 1388, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }
    if (LI == 'MYOVsp') {
        ctx.drawImage(MSS, 1520, 748, 128, 128, (PlayerX + 28) * PlayerFacing - 63, PlayerY, 128, 128);
    }

    FlipPlayer();
}

function RenderPlayer() {
    if (PAS == 0) {
        if (isYoshi) {
            drawPlayer('MYOI');
        } else if (isCarrying) {
            drawPlayer('MCI');
        } else {
            drawPlayer('MI');
        }
    }

    if (PAS == 1) {
        if (isYoshi) {
            drawPlayer('MYOI');
        } else if (isCarrying) {
            drawPlayer('MCU');
        } else {
            drawPlayer('MU');
        }
    }

    if (PAS == 2) {
        if (isYoshi) {
            drawPlayer('MYOC');
        } else if (isCarrying) {
            drawPlayer('MCC');
        } else {
            drawPlayer('MC');
        }
    }

    if (PAS == 3) {
        if (isYoshi) {
            if (Math.abs(PMX) > 1) {
                drawPlayer('MYOT2');
            } else {
                drawPlayer('MYOT4');
            }
        } else if (isCarrying) {
            drawPlayer('MCSK');
        } else {
            drawPlayer('MSK');
        }
    }

    if (PAS == 4) {
        if (WalkFra <= 10) {
            if (isYoshi) {
                drawPlayer('MYOW1');
            } else if (isCarrying) {
                drawPlayer('MCW1');
            } else {
                drawPlayer('MW1');
            }
        } else if (WalkFra <= 20) {
            if (isYoshi) {
                drawPlayer('MYOW2');
            } else if (isCarrying) {
                drawPlayer('MCW2');
            } else {
                drawPlayer('MW2');
            }
        }
    }

    if (PAS == 5) {
        if (WalkFra <= 10) {
            if (isYoshi) {
                drawPlayer('MYOR1');
            } else if (isCarrying) {
                drawPlayer('MCR1');
            } else {
                drawPlayer('MR1');
            }
        } else if (WalkFra <= 20) {
            if (isYoshi) {
                drawPlayer('MYOR2');
            } else if (isCarrying) {
                drawPlayer('MCR2');
            } else {
                drawPlayer('MR2');
            }
        }
    }

    if (PAS == 6) {
        if (isYoshi) {
            if (SavedPAS == 0 || SavedPAS == 1 || SavedPAS == 3 || SavedPAS == 4 || SavedPAS == 5) {
                drawPlayer('MYOJ');
            } else if (SavedPAS == 2) {
                drawPlayer('MYOC');
            }
        } else if (isCarrying) {
            if (SavedPAS == 0 || SavedPAS == 1 || SavedPAS == 3 || SavedPAS == 4 || SavedPAS == 5) {
                drawPlayer('MCJ');
            } else if (SavedPAS == 2) {
                drawPlayer('MCC');
            }
        } else {
            if (SavedPAS == 0 || SavedPAS == 1 || SavedPAS == 3 || SavedPAS == 4) {
                drawPlayer('MJ');
            } else if (SavedPAS == 2) {
                drawPlayer('MC');
            } else if (SavedPAS == 5) {
                drawPlayer('MRJ');
            }
        }
    }

    if (PAS == 7) {
        if (isYoshi) {
            if (SavedPAS == 0 || SavedPAS == 1 || SavedPAS == 3 || SavedPAS == 4 || SavedPAS == 5) {
                drawPlayer('MYOF');
            } else if (SavedPAS == 2) {
                drawPlayer('MYOC');
            }
        } else if (isCarrying) {
            if (SavedPAS == 0 || SavedPAS == 1 || SavedPAS == 3 || SavedPAS == 4 || SavedPAS == 5) {
                drawPlayer('MCF');
            } else if (SavedPAS == 2) {
                drawPlayer('MCC');
            }
        } else {
            if (SavedPAS == 0 || SavedPAS == 1 || SavedPAS == 3 || SavedPAS == 4) {
                drawPlayer('MF');
            } else if (SavedPAS == 2) {
                drawPlayer('MC');
            } else if (SavedPAS == 5) {
                drawPlayer('MRF');
            }
        }
    }

    if (PAS == 8) {
        if (SpinFra <= 2) {
            drawPlayer('MSP1');
        } else if (SpinFra <= 4) {
            drawPlayer('MSP2');
        } else if (SpinFra <= 6) {
            drawPlayer('MSP3');
        } else {
            drawPlayer('MSP4');
        }

        SpinFra++;

        if (SpinFra > 8) {
            SpinFra = 0;
        }
    }
}
