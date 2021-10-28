var btnA = document.getElementById('btnA');
var btnS = document.getElementById('btnS');
var btnD = document.getElementById('btnD');
var btnF = document.getElementById('btnF');
var btnG = document.getElementById('btnG');
var btnH = document.getElementById('btnH');
var btnJ = document.getElementById('btnJ');
var btnK = document.getElementById('btnK');
var btnL = document.getElementById('btnL');

btnA.addEventListener('click',()=>{
    soundA.play();
    btnA.style.backgroundColor = 'Yellow';
    btnS.style.backgroundColor = '';
    btnD.style.backgroundColor = '';
    btnF.style.backgroundColor = '';
    btnG.style.backgroundColor = '';
    btnH.style.backgroundColor = '';
    btnJ.style.backgroundColor = '';
    btnK.style.backgroundColor = '';
    btnL.style.backgroundColor = '';
})
btnS.addEventListener('click',()=>{
    soundS.play();
    btnS.style.backgroundColor = 'Yellow';
    btnA.style.backgroundColor = '';
    btnD.style.backgroundColor = '';
    btnF.style.backgroundColor = '';
    btnG.style.backgroundColor = '';
    btnH.style.backgroundColor = '';
    btnJ.style.backgroundColor = '';
    btnK.style.backgroundColor = '';
    btnL.style.backgroundColor = '';
})
btnD.addEventListener('click',()=>{
    soundD.play();
    btnD.style.backgroundColor = 'Yellow';
    btnA.style.backgroundColor = '';
    btnS.style.backgroundColor = '';
    btnF.style.backgroundColor = '';
    btnG.style.backgroundColor = '';
    btnH.style.backgroundColor = '';
    btnJ.style.backgroundColor = '';
    btnK.style.backgroundColor = '';
    btnL.style.backgroundColor = '';
})
btnF.addEventListener('click',()=>{
    soundF.play();
    btnF.style.backgroundColor = 'Yellow';
    btnA.style.backgroundColor = '';
    btnS.style.backgroundColor = '';
    btnD.style.backgroundColor = '';
    btnG.style.backgroundColor = '';
    btnH.style.backgroundColor = '';
    btnJ.style.backgroundColor = '';
    btnK.style.backgroundColor = '';
    btnL.style.backgroundColor = '';
})
btnG.addEventListener('click',()=>{
    soundG.play();
    btnG.style.backgroundColor = 'Yellow';
    btnA.style.backgroundColor = '';
    btnS.style.backgroundColor = '';
    btnD.style.backgroundColor = '';
    btnF.style.backgroundColor = '';
    btnH.style.backgroundColor = '';
    btnK.style.backgroundColor = '';
    btnJ.style.backgroundColor = '';
    btnL.style.backgroundColor = '';
})
btnH.addEventListener('click',()=>{
    soundH.play();
    btnH.style.backgroundColor = 'Yellow';
    btnA.style.backgroundColor = '';
    btnS.style.backgroundColor = '';
    btnD.style.backgroundColor = '';
    btnF.style.backgroundColor = '';
    btnG.style.backgroundColor = '';
    btnJ.style.backgroundColor = '';
    btnK.style.backgroundColor = '';
    btnL.style.backgroundColor = '';
})
btnJ.addEventListener('click',()=>{
    soundJ.play();
    btnJ.style.backgroundColor = 'Yellow';
    btnA.style.backgroundColor = '';
    btnS.style.backgroundColor = '';
    btnD.style.backgroundColor = '';
    btnF.style.backgroundColor = '';
    btnG.style.backgroundColor = '';
    btnH.style.backgroundColor = '';
    btnK.style.backgroundColor = '';
    btnL.style.backgroundColor = '';
})
btnK.addEventListener('click',()=>{
    soundK.play();
    btnK.style.backgroundColor = 'Yellow';
    btnA.style.backgroundColor = '';
    btnS.style.backgroundColor = '';
    btnD.style.backgroundColor = '';
    btnF.style.backgroundColor = '';
    btnG.style.backgroundColor = '';
    btnH.style.backgroundColor = '';
    btnJ.style.backgroundColor = '';
    btnL.style.backgroundColor = '';
})
btnL.addEventListener('click',()=>{
    soundL.play();
    btnL.style.backgroundColor = 'Yellow';
    btnA.style.backgroundColor = '';
    btnS.style.backgroundColor = '';
    btnD.style.backgroundColor = '';
    btnF.style.backgroundColor = '';
    btnG.style.backgroundColor = '';
    btnH.style.backgroundColor = '';
    btnJ.style.backgroundColor = '';
    btnK.style.backgroundColor = '';
})

var soundA = document.getElementById('soundA');
var soundS = document.getElementById('soundS');
var soundD = document.getElementById('soundD');
var soundF = document.getElementById('soundF');
var soundG = document.getElementById('soundG');
var soundH = document.getElementById('soundH');
var soundJ = document.getElementById('soundJ');
var soundK = document.getElementById('soundK');
var soundL = document.getElementById('soundL');


document.body.addEventListener('keydown', function (event) {

    var keyCharacter = event.key;

    switch (keyCharacter) {

        case 'a':
            soundA.play();
            btnA.style.backgroundColor = 'Yellow';
            break;
        case 's':
            soundS.play();
            btnS.style.backgroundColor = 'Yellow';
            break;
        case 'd':
            soundD.play();
            btnD.style.backgroundColor = 'Yellow';
            break;
        case 'f':
            soundF.play();
            btnF.style.backgroundColor = 'Yellow';
            break;
        case 'g':
            soundG.play();
            btnG.style.backgroundColor = 'Yellow';
            break;
        case 'h':
            soundH.play();
            btnH.style.backgroundColor = 'Yellow';
            break;
        case 'j':
            soundJ.play();
            btnJ.style.backgroundColor = 'Yellow';
            break;
        case 'k':
            soundK.play();
            btnK.style.backgroundColor = 'Yellow';
            break;
        case 'l':
            soundL.play();
            btnL.style.backgroundColor = 'Yellow';
            break;
        default:
            alert('Kindly press amongst shown Keyboard buttons on screens.');
    }




})

document.body.addEventListener('keyup',
    function (e) {
        var keyCharacter = e.key;
        switch (keyCharacter) {
            case 'a':
                btnA.style.backgroundColor = '';
                break;
            case 's':
                btnS.style.backgroundColor = '';
                break;
            case 'd':
                btnD.style.backgroundColor = '';
                break;
            case 'f':
                btnF.style.backgroundColor = '';
                break;
            case 'g':
                btnG.style.backgroundColor = '';
                break;
            case 'h':
                btnH.style.backgroundColor = '';
                break;
            case 'j':
                btnJ.style.backgroundColor = '';
                break;
            case 'k':
                btnK.style.backgroundColor = '';
                break;
            case 'l':
                btnL.style.backgroundColor = '';
                break;
            default:
        }
    })