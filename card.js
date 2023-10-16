const screen = document.querySelector(".screen"),
  title = document.querySelector(".title"),
  nameElt = document.querySelector(".name");

function blur(element, transitionFactor) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const text = element.dataset.value;

  screen.addEventListener("mouseover", (e) => {
    let iterations = 0;

    const interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= text.length) {
        clearInterval(interval);
      }

      iterations += 1 / transitionFactor;
    }, 30);
  });
}

blur(title, 4);
blur(nameElt, 20);
