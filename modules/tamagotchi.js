class Tamagotchi {
  #name;
  #type;
  #hungerCounter;
  #happinessCounter;
  #hungerId;
  #happinessId;
  #container;
  constructor(name, type) {
    this.#name = name;
    this.#type = type;
    this.#hungerCounter = 10;
    this.#happinessCounter = 10;
  }

  //tamagotchin skapas
  startPlaying() {
    document.querySelector("#container").classList.remove("hidden");

    this.#container = document.createElement("div");

    document.querySelector("#container").classList.add("container");

    document.querySelector("#container").append(this.#container);

    const screen = document.createElement("div");
    screen.classList.add("screen");

    const h4 = document.createElement("h4");
    if (this.#type == "Hamster") {
      this.#container.classList.add("tamaCard-hamster");
      h4.innerText = "\uD83D\uDC39";
    } else if (this.#type == "Kitty") {
      this.#container.classList.add("tamaCard-kitty");
      h4.innerText = "\uD83D\uDE3A";
    }

    const h5 = document.createElement("h5");
    h5.innerText = this.#name + " the " + this.#type;

    const hungerLevel = document.createElement("p");
    hungerLevel.innerText = "Hunger level: " + this.#hungerCounter + "/10";
    const happinessLevel = document.createElement("p");
    happinessLevel.innerText =
      "Happiness level: " + this.#happinessCounter + "/10";

    screen.append(h4, h5, hungerLevel, happinessLevel);

    const feedBtn = document.createElement("button");
    feedBtn.innerText = "Feed";
    feedBtn.classList.add("dot");

    const playBtn = document.createElement("button");
    playBtn.innerText = "Play";
    playBtn.classList.add("dot");

    this.#container.append(screen, feedBtn, playBtn);
    this.startInterval(hungerLevel, happinessLevel);

    feedBtn.addEventListener("click", () => {
      this.feed(hungerLevel);
    });

    playBtn.addEventListener("click", () => {
      this.play(happinessLevel);
    });
  }

  //nedräkning av hunger- och happinesslevel så fort tamagotchin skapats
  startInterval(hungerLevel, happinessLevel) {
    this.#hungerId = setInterval(() => {
      this.updateHunger(hungerLevel);
    }, 3500);

    this.#happinessId = setInterval(() => {
      this.updateHappiness(happinessLevel);
    }, 2000);
  }

  //räknar ned hungerlevel, tamagotchi dör när den är på 0
  updateHunger(hungerLevel) {
    this.#hungerCounter--;
    hungerLevel.innerText = "Hunger level: " + this.#hungerCounter + "/10";

    if (this.#hungerCounter == 0) this.dead();
  }
  //räknar ned happinesslevel, tamagotchi dör när den är på 0
  updateHappiness(happinessLevel) {
    this.#happinessCounter--;
    happinessLevel.innerText =
      "Happiness level: " + this.#happinessCounter + "/10";

    if (this.#happinessCounter == 0) this.dead();
  }

  //funktionen som kallas på så att hungerlevel stiger när man klickar på knappen
  feed(level) {
    if (this.#hungerCounter > 0 && this.#hungerCounter < 10) {
      this.#hungerCounter++;
      level.innerText = "Hunger level: " + this.#hungerCounter + "/10";
    } else level.innerText = "Hunger level: " + this.#hungerCounter + "/10";
  }

  //funktionen som kallas på så att happinesslevel stiger när man klickar på knappen
  play(level) {
    if (this.#happinessCounter > 0 && this.#happinessCounter < 10) {
      this.#happinessCounter++;
      level.innerText = "Happiness level: " + this.#happinessCounter + "/10";
    } else
      level.innerText = "Happiness level: " + this.#happinessCounter + "/10";
  }

  //detta händer när hunger- och/eller happinesslevel är på 0
  dead() {
    clearInterval(this.#hungerId);
    clearInterval(this.#happinessId);

    this.#container.classList.add("dead");

    const containerElements = this.#container.childNodes;

    containerElements.forEach((node) => {
      if (node.tagName == "BUTTON") node.disabled = true;
      if (node.className == "screen") {
        node.firstChild.innerText = "\uD83D\uDC80" + "R.I.P" + "\uD83D\uDC80";
        node.firstChild.classList.add("rip");
      }
    });
  }
}

export { Tamagotchi };
