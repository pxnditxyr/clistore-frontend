import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import { ProductForm } from '../forms/ProductForm';

const endpoint = 'http://localhost:8000/api';

export const CreateProduct = () => {

    const navigate = useNavigate();

    const { form, handleInputChange } = useForm({
        name: '',
        description: '',
        price: '',
        image: '',
        stock: '',
    });


    const handleCreate = async( event, { name, description, price, image, stock }) => {
        event.preventDefault();
        await axios.post( `${ endpoint }/product`,
            {
                name,
                description,
                price,
                image,
                stock,
            }
        );
        navigate( '/' );
    };


    return (
        <div className="grid place-items-center h-full">
            <ProductForm handleSubmit={ handleCreate } title="Create Product" buttonText="Create Product" { ...form } handleInputChange={ handleInputChange } />
        </div>
    )
}
