const showMsg = document.querySelector('.messages-menu .messages');
const btnMsg = document.querySelector('.messages-menu');
// const langMenu = document.querySelector(".lnag-menu");

btnMsg.addEventListener('click', e => {
    showMsg.classList.toggle('active');
})
