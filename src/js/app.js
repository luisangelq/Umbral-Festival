
document.addEventListener("DOMContentLoaded", function() {
    scrollNav();
    fixedNavigation();
})

function scrollNav() {
    const links = document.querySelectorAll(".main-nav a")
    
    links.forEach( function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value);

            section.scrollIntoView({
                behavior: "smooth",
            })
        })
    })  
}


function fixedNavigation() {

    const bar = document.querySelector(".header")

    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            bar.classList.remove("fixed")
        } else {
            bar.classList.add("fixed")
        }
    })

    //elemento a observar
    observer.observe(document.querySelector(".video"))
}