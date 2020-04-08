"use strict";

let menuContent = document.querySelectorAll(".circular-menu__content");
if (menuContent) {
    menuContent.forEach(item => {
        if (item) {
            let num = item.dataset.num;
            item.onclick = (e) => {
                e.preventDefault();
                console.log(num)
            };
        }
    });
}