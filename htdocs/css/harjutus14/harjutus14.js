const items = document.querySelectorAll(".list-group-item");

items.forEach((item) => {
    const type = item.innerHTML.split(":")[0];
    switch(type){
        case "Ootel":
            item.classList.add("list-group-item-warning")
            break;
        case "Tehtud":
            item.classList.add("list-group-item-success")
            item.style.fontWeight =700;
            break;
        case "Viga":
            item.classList.add("list-group-item-danger")
        default:
            break;
    }
});