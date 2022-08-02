import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';
import ProductManage from './views/ProductManage';
import ProtectedRoute from './components/routing/ProtectedRoute';
import ProductContextProvider from './contexts/ProductContext';
import Home from './views/Home';
import CartContextProvider from './contexts/CartContext';
import Cart from './views/Cart';
import ProductDetail from './views/ProductDetail';
import Payment from './views/Payment';

function App() {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
                <CartContextProvider>
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
                            <ProtectedRoute exact path="/payment" component={Payment} />

                            <ProtectedRoute exact path="/:productId" component={ProductDetail} />
                        </Switch>
                    </Router>
                </CartContextProvider>
            </ProductContextProvider>
        </AuthContextProvider>
    );
}

export default App;
