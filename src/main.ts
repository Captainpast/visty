addEventListener("load", () => {
    let open = false;
    let headerbar = document.querySelector("#headerbar")

    let hbb = document.createElement("button")
    hbb.id = "hbb";
    hbb.textContent = "≡"

    hbb.addEventListener("click", () => {
        if (open) {
            hbb.textContent = "≡"
            headerbar?.classList.remove("show-res")
            open = false;
        } else {
            hbb.textContent = "×"
            headerbar?.classList.add("show-res")
            open = true;
        }
    })

    headerbar?.prepend(hbb)
})
