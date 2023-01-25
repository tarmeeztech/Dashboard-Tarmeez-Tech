const progress = document.querySelectorAll('.line');

for(let i = 0; i < progress.length; i++) {
    setTimeout(() => {
        progress[i].style.opacity = 1;
        progress[i].style.width = progress[i].getAttribute('data-done')+'%';
    }, 500)
}