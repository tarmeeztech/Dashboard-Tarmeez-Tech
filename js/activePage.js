const activePage = window.location.pathname;

const navLinks = document.querySelectorAll(".sidebar a").
forEach(link => {
    link.classList.remove('active');
    if(link.href.includes(`${activePage}`)) {
        console.log(activePage);
        console.log(link.href);
        // link.classList.toggle('active');
        link.classList.add('active');
    }
});