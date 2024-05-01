import ClickHandler from "./ClickButtonHandler.js";

let ClickValue = 0;
const ButtonClickHandler = new  ClickHandler(
    document.getElementById("Click"),
    ClickValue,
    document.getElementById("Inner-Count")
);
ButtonClickHandler.HandleClick();
ButtonClickHandler.HandleCounter();