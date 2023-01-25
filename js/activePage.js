const activePage = window.location.pathname;
console.log(activePage)
const navLinks = document.querySelectorAll(".sidebar a").
forEach(link => {
    link.classList.remove('active');
    if(activePage === "/") {
        link.classList.add('active');
        throw BreakException;
        // link[0].classList.add('active');
    }
    if(link.href.includes(`${activePage}`)) {
        // link.classList.toggle('active');
        link.classList.add('active');
    }
});