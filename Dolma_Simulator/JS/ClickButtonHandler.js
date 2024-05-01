export default class ClickButtonHandler {

    Element;
    Value_Container;
    Counter_element;

    constructor(Element, Value_Container, Counter_element) {
        try {
            this.Element = Element;
            this.Value_Container = Value_Container;
            this.Counter_element = Counter_element;
        } catch (error) {
            console.error(`[ERROR]: ${error}`);
        }
    }

    HandleClick() {

    }

    HandleCounter() {

    }

}