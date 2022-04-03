import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { ProductForm } from '../forms/ProductForm';
import { useForm } from '../../hooks/useForm';
import { handleUpdateProduct } from '../../services/products';

import { endpoint } from '../../config';

export const EditProduct = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const { form, handleInputChange, updateForm } = useForm({
        name: '',
        description: '',
        price: '',
        image: '',
        stock: '',
    });

    useEffect( () => {
        const getProductById = async() => {
            const response = await axios.get(`${ endpoint }/product/${ id }`);
            updateForm( response.data );
        }
        getProductById();
    }, [] );

    return (
        <div className="grid place-items-center h-full">
            <ProductForm
                handleSubmit={ handleUpdateProduct }
                title="Edit Product"
                buttonText="Update Product"
                formProduct={ form }
                handleInputChange={ handleInputChange }
                navigate={ navigate }
                id={ id }
                />
        </div>
    );
};
