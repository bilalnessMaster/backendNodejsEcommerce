import {
    createBrowserRouter ,

} from 'react-router-dom'
import App from '../App';
import Home from '../pages/Home';
import CategoryPage from '../pages/CategoryPage';
import SearchPage from '../pages/SearchPage';
import ShopPage from '../pages/ShopPage';
import OneProductPage from '../pages/OneProductPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import DashboardPage from '../pages/DashboardPage';


const router = createBrowserRouter([
    {
        path  : '/', 
        element : <App />,
        children : [
            {
                path : '/', 
                element : <Home/>
            },
            {
                path : '/category/:CategoryName', 
                element : <CategoryPage/>
            },
            {
                path : '/search',
                element : <SearchPage/>
            },
            {
                path : '/shop',
                element : <ShopPage/>
            },
            {
                path : '/product/:id',
                element : <OneProductPage/>
            },
            
        ]
    },{
        path : 'login' , 
        element : <LoginPage />
    },{
        path : 'register' , 
        element : <RegisterPage />
    },{
        path : 'profile' , 
        element : <ProfilePage />
    }
    ,{
        path : 'dashboard' , 
        element : <DashboardPage />
    }
])
export default router ; 