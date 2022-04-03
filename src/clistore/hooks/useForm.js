import { useState } from 'react';

export const useForm = ( initialState ) => {

    const [ form, setForm ] = useState( initialState );

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value
        });
    };
    
    const resetForm = () => {
        setForm( initialState );
    }

    const updateForm = ( newForm ) => {
        setForm( newForm );
    }

    return { 
        form,
        handleInputChange,
        resetForm,
        updateForm,
        ...form
    }

}
