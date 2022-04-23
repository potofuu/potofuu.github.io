(() =>  {
    const about = document.querySelector(".about-section"), tabs = document.querySelector(".about-tabs");
    tabs.addEventListener("click", (event) => {
        if (event.target.classList.contains("subset") && !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");
            tabs.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", "outer-shadow");
            about.querySelector(".subset-info.active").classList.remove("active");
            about.querySelector(target).classList.add("active");
        }
    })
})();