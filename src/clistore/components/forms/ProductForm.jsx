import { useForm } from '../../hooks/useForm';

export const ProductForm = ({
    title,
    buttonText,
    formProduct,
    handleInputChange,
    handleSubmit,
    navigate,
    id
}) => {

    const { name, description, price, image, stock } = formProduct;

    return (
        <form 
            className="bg-white py-6 px-10 shadow-2xl rounded-xl flex flex-col items-center sm:w-96 gap-6"
            onSubmit={ () => handleSubmit( event, formProduct, navigate, id ) }
            >

            <h1 className="text-4xl font-bold text-gray-600"> { title } </h1>

            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={ name }
                onChange={ handleInputChange }
                className="border p-2 w-full bg-gray-200 text-lg rounded-lg focus:bg-teal-700 focus:placeholder-white focus:font-bold text-xl focus:outline-none focus:text-white"
                required
            />
            <input
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                value={ description }
                onChange={ handleInputChange }
                className="border p-2 w-full bg-gray-200 text-lg rounded-lg focus:bg-teal-700 focus:placeholder-white focus:font-bold text-xl focus:outline-none focus:text-white"
                required
            />
            <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                value={ price }
                onChange={ handleInputChange }
                className="border p-2 w-full bg-gray-200 text-lg rounded-lg focus:bg-teal-700 focus:placeholder-white focus:font-bold text-xl focus:outline-none focus:text-white"
                required
            />
            <input
                type="text"
                id="image"
                name="image"
                placeholder="Image"
                value={ image }
                onChange={ handleInputChange }
                className="border p-2 w-full bg-gray-200 text-lg rounded-lg focus:bg-teal-700 focus:placeholder-white focus:font-bold text-xl focus:outline-none focus:text-white"
                required
            />
            <input
                type="number"
                id="stock"
                name="stock"
                placeholder="Stock"
                value={ stock }
                onChange={ handleInputChange }
                className="border p-2 w-full bg-gray-200 text-lg rounded-lg focus:bg-teal-700 focus:placeholder-white focus:font-bold text-xl focus:outline-none focus:text-white"
                required
            />
            <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
            >  { buttonText } </button>
        </form>
    );
};
