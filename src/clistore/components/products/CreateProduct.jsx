import { useNavigate } from "react-router-dom";
import { ProductForm } from '../forms/ProductForm';

import { useForm } from '../../hooks/useForm';
import { handleAddNewProduct } from '../../services/products';

export const CreateProduct = () => {

    const navigate = useNavigate();

    const { form, handleInputChange } = useForm({
        name: '',
        description: '',
        price: '',
        image: '',
        stock: '',
    });

    return (
        <div className="grid place-items-center h-full">
            <ProductForm 
                handleSubmit={ handleAddNewProduct }
                title="Create Product"
                buttonText="Create Product"
                formProduct={ form }
                handleInputChange={ handleInputChange }
                navigate={ navigate }
                />
        </div>
    );
};
