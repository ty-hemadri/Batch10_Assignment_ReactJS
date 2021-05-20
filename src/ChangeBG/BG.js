function change_color(select) {
    var color = select.options[select.selectedIndex].textContent;
    
    document.body.style.backgroundColor = color;
}