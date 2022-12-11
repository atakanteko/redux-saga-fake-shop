import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const ProductComponent = () => {
    const dispatch = useDispatch();
    const {products, loading, hasError} = useSelector((store) => store.allProduct)
    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    const renderList = products?.map((product) => {
        const { id, title, image, price, category } = product;
        return(
            <div className="four column wide" key={id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price"> $ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    if(loading){
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    if(hasError && !loading){
        return(
            <div>
                <h2>{hasError}</h2>
            </div>
        ) 
    }
    return (
       <>{renderList}</>
    )
}

export default ProductComponent;