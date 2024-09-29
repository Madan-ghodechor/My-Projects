const bodyEl = document.querySelector(".container");

bodyEl.addEventListener("mousemove", (evt) => {
    const xPos = evt.offsetX;
    const yPos = evt.offsetY;

    const spanEL = document.createElement("span");
    spanEL.style.left = xPos + "px";
    spanEL.style.top = yPos + "px";

    const size = Math.random() * 100;
    spanEL.style.width = size + 'px'
    spanEL.style.height = size + 'px'
    bodyEl.appendChild(spanEL)
    setTimeout(() => {
        spanEL.remove()
    }, 7000);
})

bodyEl.addEventListener("touchmove", (evt) => {
    const xPos = evt.offsetX;
    const yPos = evt.offsetY;

    const spanEL = document.createElement("span");
    spanEL.style.left = xPos + "px";
    spanEL.style.top = yPos + "px";

    const size = Math.random() * 100;
    spanEL.style.width = size + 'px'
    spanEL.style.height = size + 'px'
    bodyEl.appendChild(spanEL)
    setTimeout(() => {
        spanEL.remove()
    }, 7000);
})