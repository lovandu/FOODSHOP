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

function App() {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
                <PostContextProvider>
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
                                path="/dashboard"
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                exact
                                path="/about"
                                component={About}
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
                        </Switch>
                    </Router>
                </PostContextProvider>
            </ProductContextProvider>
        </AuthContextProvider>
    );
}

export default App;
