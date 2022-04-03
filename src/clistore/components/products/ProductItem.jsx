import { Link } from 'react-router-dom';

export const ProductItem = ({ product, deleteProduct, setProducts }) => {

    return (
        <article className="flex flex-col bg-white px-4 py-5 rounded-xl justify-center items-center aspect-h-8 shadow-2xl gap-3">
            <section className="w-full aspect-w-3 aspect-h-3">
                <img 
                    className="object-cover shadow-lg rounded-lg"
                    src={ product.image } 
                    />
            </section>
            <section className="px-8 w-full">
                <p className="text-xl text-center font-medium text-ellipsis overflow-hidden">{ product.name } </p>
            </section>
            <section className="w-full px-8">
                <p className="text-lg text-ellipsis overflow-hidden"> { product.description } </p>
            </section>
            <section className="w-full flex justify-center items-center gap-8">
                <span className="text-lg font-bold"> ${ product.price } </span>
                <small className="text-sm font-bold ml-5"> In stock: { product.stock } </small>
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
