import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';
import ProductManage from './views/ProductManage';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Home from './views/Home';
import Cart from './views/Cart';
import ProductDetail from './views/ProductDetail';
import Payment from './views/Payment';
import Purchase from './views/Purchase';
import Products from './views/Products';
import NotFound from './views/NotFound';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <AuthContextProvider>
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
                        <ProtectedRoute exact path="/home" component={Home} />
                        <ProtectedRoute exact path="/cart" component={Cart} />
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
                            path="/product/:productId"
                            component={ProductDetail}
                        />
                        {/* No other routes match */}

                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </AuthContextProvider>
        </Provider>
    );
}

export default App;
