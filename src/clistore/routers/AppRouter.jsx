import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { ShowProducts } from '../components/products/ShowProducts';
import { CreateProduct } from '../components/products/CreateProduct';
import { EditProduct } from '../components/products/EditProduct';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <ShowProducts /> } />
                <Route path="create" element={ <CreateProduct /> } />
                <Route path="edit/:id" element={ <EditProduct /> } />
            </Routes>
        </BrowserRouter>
    )
}
