import React from 'react';
import useRole from '../Hooks/useRole';
import { Navigate } from 'react-router-dom';

const BuyerRouter = ({children}) => {
    const [role, isLoading] = useRole()
    
    if (isLoading) return <div className="flex justify-center items-center h-screen">
    <span className="loading loading-ring loading-lg"></span>
  </div>
    if (role === 'Buyer') return children
    return <Navigate to='/login' replace='true' />
};

export default BuyerRouter;