var labels = document.getElementsByClassName("menuLabel");

for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function() {

        var menu = labels[i].parentElement;

        if (menu.classList.contains("active")) {
            menu.classList.remove("active");

            var activeMenus = menu.getElementsByClassName("active");

            for (let j = 0; j < activeMenus.length; j++) {
                activeMenus[j].classList.remove("active");
            }

        } else {
            menu.classList.add("active");
        }
    })
}