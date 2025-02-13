import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";
import { toast } from 'react-toastify'

export default function PrivateRoute() {
    const [ok, setOk] = useState(false)
    const  [auth, setAuth] = useAuth()

    useEffect(() => {
        const authCheck = async() => {
            const res = await axios.get(`${import.meta.env.VITE_API}/user/user-auth`)
            if(res.data.ok){
                setOk(true)
            } else{
                setOk(false);
                toast.error(res.data.message);
            }
        };
        if(auth?.token) authCheck();
    }, [auth?.token])

    return ok ? <Outlet /> : <Spinner />
}