const hideBtn = document.getElementById('hideBtn');
const togglePara = document.getElementById('togglePara');

hideBtn.addEventListener('click', () => {
    if (togglePara.style.display === 'none') {
        togglePara.style.display = 'block';
    } else {
        togglePara.style.display = 'none';
    }
});
