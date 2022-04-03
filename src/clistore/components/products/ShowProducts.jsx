import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ProductItem } from './ProductItem';

import { getProducts, deleteProduct } from '../../services/products';

export const ShowProducts = () => {

    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        getProducts( setProducts );
    }, [] )

    return (
        <>
            <h1 className="text-white text-6xl text-center font-bold"> Products </h1>
            <div>
                <Link 
                    to="/create"
                    className="bg-lime-600 text-white text-xl font-medium px-3 py-2 rounded-full"
                    >
                    Create
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-5 mx-auto">
                {
                    products.map( product => ( 
                        <ProductItem
                            key={ product.id }
                            product={ product }
                            deleteProduct={ deleteProduct }
                            setProducts={ setProducts }
                            />
                    ))
                }
            </div>
        </>
    );
};
