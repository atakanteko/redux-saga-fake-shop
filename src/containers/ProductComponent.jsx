import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../redux/actions/productActions";

const ProductComponent = () => {
    const dispatch = useDispatch();
    const {products, loading, hasError} = useSelector((store) => store.allProduct)
    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return(
            <div className="card-c" key={id} style={{flex:'1'}}>
               <Link to={`/product/${id}`}>
                <div style={{width:'276px'}}>
                        <img className="card-img-top" src={image} alt={title} width={276} height={180} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
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
        <div className="card-group-c">
            {renderList}
        </div>
    )
}

export default ProductComponent;