const nav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible")
    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else {nav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)}
})

// Copyright Year

const yearHTML = document.getElementById("year")
const date = new Date()
const currentYear = date.getFullYear()
console.log(currentYear)

yearHTML.innerHTML = currentYear