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
        <div className="h-screen w-full p-8 flex flex-col items-center gap-12">
            <h1 className="text-gray-800 text-8xl text-center font-bold"> Best Products </h1>
            <div className="w-full flex flex-row justify-center">
                <Link 
                    to="/create"
                    className="w-80 bg-cyan-700 text-center text-white text-3xl font-medium px-3 py-2 rounded-full"
                    >
                    Create Product
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 mx-auto bg-gray-300 w-full p-12 rounded-xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        </div>
    );
};
