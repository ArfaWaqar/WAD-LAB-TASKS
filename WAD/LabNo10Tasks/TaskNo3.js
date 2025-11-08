function addStyle() {
    var style = document.createElement("style");
    style.innerHTML = ".highlight { background-color: yellow; font-weight: bold; border: 2px solid orange; padding: 5px; }";
    document.head.appendChild(style);

    document.getElementById("text").classList.add("highlight");
}
