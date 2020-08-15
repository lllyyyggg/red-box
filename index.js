const apply = () => {

    const boxes = document.querySelectorAll("div");
    boxes.forEach(div => {
        div.style.border = "1px solid red";
    })
};

module.exports = {
    apply
};