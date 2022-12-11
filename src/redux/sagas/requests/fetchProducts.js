import axios from "axios";

const fetchProducts = async () => {
    try {
        const data = await axios.get('https://fakestoreapi.com/products')
        return data;
    } catch (error) {
        throw(error)
    }
}

export default fetchProducts;