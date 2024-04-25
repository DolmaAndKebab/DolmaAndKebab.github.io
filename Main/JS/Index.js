import Redirct_functions from "./Redirct.js";
class Button_Handler {
    Element;
    constructor(Element) {
        try {
            this.Element = Element;
        }
        catch (error) {
            console.error(`Failed to set Element value. [ERROR]: ${error}`);
        }
    }
    Button_Redirct(URL) {
        if (typeof URL !== "string" || URL.length < 0) {
            return false;
        }
        if (typeof this.Element === "undefined") {
            return false;
        }
        try {
            this.Element.addEventListener("click", function () {
                if (Redirct_functions.Redirct(URL.toString()) != true) {
                    console.error(`FAILED TO REDIRCT TOWARDS: ${URL.toString()}`);
                }
            });
        }
        catch (error) {
            console.error(`Failed to add Event Listener. [ERROR]: ${error}`);
        }
        return true;
    }
}
// Handling the TS Button
const About_btn_handler = new Button_Handler(document.getElementById("ABOUT"));
About_btn_handler.Button_Redirct("#About-us");
// Handling the TS Button
const JS_btn_handler = new Button_Handler(document.getElementById("JS"));
JS_btn_handler.Button_Redirct("#Javascript");
// Handling the TS Button
const TS_btn_handler = new Button_Handler(document.getElementById("TS"));
TS_btn_handler.Button_Redirct("#Typescript");
// Handling the Github Button
const Github_btn_handler = new Button_Handler(document.getElementById("Github"));
Github_btn_handler.Button_Redirct("https://github.com/DolmaAndKebab");
// Exporting functions & classes
export default {
    Button_Handler,
};
//# sourceMappingURL=Index.js.map