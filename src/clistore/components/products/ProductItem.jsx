import { Link } from 'react-router-dom';

export const ProductItem = ({ product, deleteProduct, setProducts }) => {

    return (
        <article className="flex flex-col bg-white px-4 py-5 rounded-xl justify-center items-center aspect-h-8">
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
                <Link 
                    to={ `/edit/${ product.id }` }
                    className="bg-yellow-500 px-3 py-2 text-center font-medium text-xl text-white rounded-xl w-24"
                    >
                    Edit
                </Link>
                <button
                    onClick={ () => deleteProduct( product.id, setProducts ) }
                    className="bg-red-500 px-3 py-2 text-center font-medium text-xl text-white rounded-xl w-24"
                    >
                    Delete
                </button>
            </section>
        </article>

    )
}
