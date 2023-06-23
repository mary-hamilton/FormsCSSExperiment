import './bootstrap.css';
import './style.css';

let formToggler = 0;

const catCreator = document.getElementById("cat-creator");
const main = document.getElementById("main")

if (formToggler) {
    main.classList.add("toggled")
} else {
    main.classList.remove("toggled")
}

