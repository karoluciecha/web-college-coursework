const Action = {
    red()  { document.body.style.background = "red"; },
    green() { document.body.style.background = "green"; },
    blue()  { document.body.style.background = "blue"; },
};

const keyAction = {
    r: { keydown: Action.red},
    g: { keydown: Action.green},
    b: { keydown: Action.blue},
};

const toggleBackgroundColor = () => {
    const currentColor = document.body.style.background;
    if (currentColor === "white") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "white";
    }
};
document.body.addEventListener("keydown", (ev) => {
    if (ev.repeat) return;                             
    if (!(ev.key in keyAction)) {
        toggleBackgroundColor();
        return;
      }
    keyAction[ev.key].keydown();
});