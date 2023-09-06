import HomePage from "../pages/HomePage/HomePage";
import Product from "../pages/Product/Product";
import Order from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
const routes =[ 
    {path:"/", page : HomePage},
    {path:"/products", page : Product},
    {path:"/Order", page : Order},
    {path:'*',page : NotFoundPage }
]

export default routes;