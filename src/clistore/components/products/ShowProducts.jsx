import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const endpoint = 'http://localhost:8000/api';

export const ShowProducts = () => {

    const [ products, setProducts ] = useState([]);

    useEffect( () => {

        getAllProducts()

    }, [] )

    const deleteProduct = async( id ) => {
        await axios.delete( `${ endpoint }/product/${ id }` );
        getAllProducts();
    }

    const getAllProducts = async() => {
        const response = await axios.get( `${ endpoint }/products` );
        setProducts( response.data );
    }

    return (
        <>
            <h1 className="text-white text-6xl text-center font-bold"> Products </h1>
            <Link to="/create" className="bg-lime-600 text-white text-xl font-medium px-3 py-2 rounded-full"> Create </Link>
            <div className="grid grid-cols-3 gap-5 mx-auto">
                {
                    products.map( product => (
                        <article className="flex flex-col bg-white px-4 py-5 rounded-xl justify-center items-center aspect-h-8" key={ product.name }>
                            <section className="w-full aspect-w-3 aspect-h-3">
                                <img 
                                    className="object-cover shadow-lg rounded-lg"
                                    src={ product.image } 
                                    />
                            </section>
                            <section className=""> { product.name } </section>
                            <section><p> { product.description } </p></section>
                            <section className="">
                                <span> { product.price } </span>
                                <small> { product.stock } </small>
                            </section>
                            <section className="flex flex-row justify-around w-full">
                                <Link to={ `/edit/${ product.id }` } className="bg-yellow-500 px-3 py-2 text-center font-medium text-xl text-white rounded-xl w-24"> Edit </Link>
                                <button onClick={ () => deleteProduct( product.id ) } className="bg-red-500 px-3 py-2 text-center font-medium text-xl text-white rounded-xl w-24"> Delete </button>
                            </section>
                        </article>
                    ) )
                }
            </div>
        </>
    );
};
