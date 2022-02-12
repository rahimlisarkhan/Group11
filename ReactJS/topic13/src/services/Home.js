import axios from "axios"
import MockAdapter from "axios-mock-adapter";
import productsData from "../mock/products.json"

let mock = new MockAdapter(axios)

mock.onGet("/api/products").reply(200, {
    products: productsData,
});


export const getProducts = async () => {

    try {
        let res = await axios.get("/api/products")
        return res
    } catch (err) {

    }

}