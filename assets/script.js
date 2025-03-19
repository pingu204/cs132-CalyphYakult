// https://www.youtube.com/watch?v=V-CBdlfCPic
navbar = document.querySelector(".navbar");
scrollWatcher = document.querySelector("#data-scroll-watcher");

const navObserver = new IntersectionObserver((entries) => {
    navbar.classList.toggle("sticking", !entries[0].isIntersecting);
})

navObserver.observe(scrollWatcher);