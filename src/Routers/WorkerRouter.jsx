import useRole from "../Hooks/useRole";


const WorkerRouter = ({children}) => {
    const [role, isLoading] = useRole()
    if (isLoading) return <div className="flex justify-center items-center h-screen">
    <span className="loading loading-ring loading-lg"></span>
  </div>
    if (role === 'Worker') return children
    return <Navigate to='/login' replace='true' />
};

export default WorkerRouter;