import React from "react";
import "./Login.css";
import useFirebase from "./../../Hooks/useFirebase";
import { Link } from "react-router-dom";

const Login = () => {
    const { handleGoogleLogin } = useFirebase();

    return (
        <div>
            <div className="logo">
                <img
                    className="p-2 w-25 mb-5"
                    src="https://i.ibb.co/QvMLCj4/Group-1329.png"
                    alt="Volunteer Network"
                />
            </div>
            <div className="w-25 m-auto">
                <div className="box w-100 border justify-content-center align-items-center">
                    <h5>Login With</h5>
                    <button onClick={handleGoogleLogin} className="btn w-75  btn-success">
                        Continue With Google
                    </button>
                    <p>Dont Have An Account <Link to='/register'>Create An Account</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
