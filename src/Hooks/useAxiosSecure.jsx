import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';



export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000"
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {userSignOut} = useAuth();
    axiosSecure.interceptors.request.use(function(config) {
        const token = localStorage.getItem("access-token");
        console.log("request stopped by interceptors",token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)
    })
    axiosSecure.interceptors.response.use(function(response){
        return response
    },async(error) => {
        const status = error.response.status;
        if(status === 401 || status === 403 || status === 400){
            await userSignOut();
            navigate("/login")
        }
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;