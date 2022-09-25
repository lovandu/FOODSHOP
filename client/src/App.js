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
import OrderContextProvider from './contexts/OrderContext';
import Purchase from './views/Purchase';
import Products from './views/Products';
import NotFound from './views/NotFound';

function App() {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
                <OrderContextProvider>
                    <CartContextProvider>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Landing} />
                                <Route
                                    exact
                                    path="/login"
                                    render={(props) => (
                                        <Auth {...props} authRoute="login" />
                                    )}
                                />
                                {/* No other routes match */}
                                <Route
                                    exact
                                    path="/register"
                                    render={(props) => (
                                        <Auth {...props} authRoute="register" />
                                    )}
                                />

                                <ProtectedRoute
                                    exact
                                    path="/productmanage"
                                    component={ProductManage}
                                />
                                <ProtectedRoute
                                    exact
                                    path="/home"
                                    component={Home}
                                />
                                <ProtectedRoute
                                    exact
                                    path="/cart"
                                    component={Cart}
                                />
                                <ProtectedRoute
                                    exact
                                    path="/payment"
                                    component={Payment}
                                />
                                 <ProtectedRoute
                                    exact
                                    path="/search/:productName"
                                    component={Products}
                                />

                                <ProtectedRoute
                                    exact
                                    path="/purchase"
                                    component={Purchase}
                                />
                                <ProtectedRoute
                                    exact
                                    path="/:productId"
                                    component={ProductDetail}
                                />
                                <Route component={NotFound}/>

                            </Switch>
                        </Router>
                    </CartContextProvider>
                </OrderContextProvider>
            </ProductContextProvider>
        </AuthContextProvider>
    );
}

export default App;
