import { Tamagotchi } from "./modules/tamagotchi.js";

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("input").value;
    const type = document.querySelector("select").value;
    console.log(name, type);

    const newTama = new Tamagotchi(name, type);
    newTama.startPlaying();
});
