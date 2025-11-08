const bulb = document.getElementById('bulb');

bulb.addEventListener('click', () => {
    if (bulb.src.includes('Offbulb.png')) {
        bulb.src = 'Onbulb.png';
    } else {
        bulb.src = 'Offbulb.png';
    }
});
