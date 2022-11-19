import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./Pages.css";
import Card from "./Card/Card";

const Products = ({addToBasket}) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`https://637789715c4777651220950c.mockapi.io/student`)
            .then(({data}) => setProduct(data.reverse()))
    }, [])


    return (
        <section id="product">
            <div className="container">
                <div className="product">
                    {
                        product.map(el => (
                           <Card el={el} key={el.id} addToBasket={addToBasket}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;