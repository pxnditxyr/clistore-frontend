import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import { ProductForm } from '../forms/ProductForm';

const endpoint = 'http://localhost:8000/api';

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
            const response = await axios.get(`${endpoint}/product/${id}`);
            updateForm( response.data );
        }
        getProductById();
    }, [] );


    const handleUpdate = async( event, { name, description, price, image, stock } ) => {
        event.preventDefault();
        await axios.put(`${ endpoint }/product/${ id }`, {
            name,
            description,
            price,
            image,
            stock
        });
        navigate('/');
    }


    return (
        <div className="grid place-items-center h-full">
            <ProductForm handleSubmit={ handleUpdate } title="Edit Product" buttonText="Update Product" { ...form } handleInputChange={ handleInputChange } />
        </div>
    )
}
