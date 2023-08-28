window.addEventListener("load", (event) => {
    const els = document.querySelectorAll("nav li")
    for (const el of els) {
        el.addEventListener("click", function () {
            const id = this.getAttribute("data")
            const top = document.querySelector(`#${id}`).getBoundingClientRect().top
            window.scrollTo({
                top,
                behavior: 'smooth',
            })
        })
    }
})