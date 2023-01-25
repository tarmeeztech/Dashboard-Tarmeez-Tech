const btnShow = document.querySelector(".lnag-menu ul");
const langMenu = document.querySelector(".lnag-menu");

langMenu.addEventListener('click', e => {
    btnShow.classList.toggle('show');
})