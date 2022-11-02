import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Spinner from 'react-bootstrap/Spinner';
import NavbarMain from '../layout/NavbarMain';
import Footer from '../layout/Footer';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../store/actions/productAction';
import { getCarts } from '../../store/actions/cartAction';
import { loadUser } from '../../store/actions/authAction';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        dispatch(getAllProducts());
        dispatch(getCarts());
        
    }, []);
    

    // const authLoading = useSelector((state) => state.auth.authLoading);
    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (authLoading)
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <>
                        <NavbarMain />
                        <Component {...rest} {...props} />
                        <Footer />
                    </>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
