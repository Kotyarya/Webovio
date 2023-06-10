const footerLogo = document.querySelector(".logoFooter")
const servicesLink = document.querySelector(".servicesLink")
const projectLink = document.querySelector(".projectLink")
const deationLink = document.querySelector(".deationLink")


deationLink.addEventListener("click", () => {
    window.scrollTo({
        top: 7200,
        behavior: "smooth"
    })
})
projectLink.addEventListener("click", () => {
    window.scrollTo({
        top: 3310,
        behavior: "smooth"
    })
})
servicesLink.addEventListener("click", () => {
    window.scrollTo({
        top: 1500,
        behavior: "smooth"
    })
})
footerLogo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
