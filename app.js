var btnA = document.getElementById('btnA');
var btnS = document.getElementById('btnS');
var btnD = document.getElementById('btnD');
var btnF = document.getElementById('btnF');
var btnG = document.getElementById('btnG');
var btnH = document.getElementById('btnH');
var btnJ = document.getElementById('btnJ');
var btnK = document.getElementById('btnK');
var btnL = document.getElementById('btnL');

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