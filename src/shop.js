import initialRenders from "./core/initialRender";
import listeners from "./core/listeners";

class Shop {
    init(){
        console.log("show App Start");
        initialRenders();
        listeners();
    }
}

export default Shop;
