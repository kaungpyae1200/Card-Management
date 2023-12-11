import initialRenders from "./core/initialRender";
import listeners from "./core/listeners";
import observers from "./core/observer";

class Shop {
  init() {
    console.log("show App Start");
    observers();
    initialRenders();
    listeners();
  }
}

export default Shop;
