const btnGenerate = document.getElementById('btnGenerate');
const eyeSelect = document.getElementById('eyeSelect');
const mouthSelect = document.getElementById('mouthSelect');
const title = document.getElementById('title');

const emojis = ['😀', '😆', '😎', '🙁', '👽', '😊', '🙂', '😣', '🤑']

// Listen for click on generate btn
btnGenerate.addEventListener('click', (e) => {
    // read the values of the selects
    const eyes = eyeSelect.value;
    const mouth = mouthSelect.value;

    // change h1 based on what we get from the selects
    switch(eyes + mouth) {
        case ':D':
            title.innerText = emojis[0];
            break;
        case 'XD':
            title.innerText = emojis[1];
            break;
        case 'B)':
            title.innerText = emojis[2];
            break;
        case ':(':
            title.innerText = emojis[3];
            break;
        case 'B(':
            title.innerText = emojis[4];
            break;
        case 'X)':
            title.innerText = emojis[5];
            break;
        case ':)':
            title.innerText = emojis[6];
            break;
        case 'X(':
            title.innerText = emojis[7];
            break;
        case 'BD':
            title.innerText = emojis[8];
            break;
        default:
            title.innerText = '😴';
            
    }
})



// bonus: show emoji images instead of text