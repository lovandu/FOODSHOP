import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProductManage from './views/ProductManage';
import ProtectedRoute from './components/routing/ProtectedRoute';
import About from './views/About';
import PostContextProvider from './contexts/PostContext';
import ProductContextProvider from './contexts/ProductContext';
import Home from './views/Home';
import CartContextProvider from './contexts/CartContext';
import Cart from './views/Cart';
import ProductInfo from './views/ProductDetail';
import ProductDetail from './views/ProductDetail';

function App() {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
                <CartContextProvider>
                    <PostContextProvider>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/login" render={(props) => <Auth {...props} authRoute="login" />} />
                                <Route
                                    exact
                                    path="/register"
                                    render={(props) => <Auth {...props} authRoute="register" />}
                                />
                                <ProtectedRoute exact path="/productmanage" component={ProductManage} />
                                <ProtectedRoute exact path="/home" component={Home} />
                                <ProtectedRoute exact path="/cart" component={Cart} />
                                <ProtectedRoute exact path="/productDetail" component={ProductDetail} />
                                <ProtectedRoute exact path="/:productId" component={ProductDetail} />

                            </Switch>
                        </Router>
                    </PostContextProvider>
                </CartContextProvider>
            </ProductContextProvider>
        </AuthContextProvider>
    );
}

export default App;
