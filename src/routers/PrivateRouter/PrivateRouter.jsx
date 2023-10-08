import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import { FirebaseAuthContext } from "../../providers/FirebaseAuthProvider";

const PrivateRouter = ({ children }) => {

    const { loading, user } = useContext(FirebaseAuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>;
    }

    if (user) {
        return children;
    }

    return  <Navigate to="/login"></Navigate>
};

export default PrivateRouter;