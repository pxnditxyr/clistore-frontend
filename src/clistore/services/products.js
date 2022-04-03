import axios from 'axios';
import { endpoint } from '../config';

export const handleAddNewProduct = async( event, formProduct, navigate ) => {
    event.preventDefault();
    await axios.post( `${ endpoint }/product`, { ...formProduct } );
    navigate( '/' );
};

export const handleUpdateProduct = async( event, formProduct, navigate, id ) => {
    event.preventDefault();
    await axios.put(`${ endpoint }/product/${ id }`, { ...formProduct } );
    navigate('/');
}

export const deleteProduct = async( id, setProducts ) => {
    await axios.delete( `${ endpoint }/product/${ id }` );
    getProducts( setProducts );
}

export const getProducts = async( setProducts ) => {
    const response = await axios.get( `${ endpoint }/products` );
    setProducts( response.data );
}
