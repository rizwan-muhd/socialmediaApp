import {useState} from 'react'
import { Navigate,useLocation } from 'react-router-dom'
import { setLogin } from '../state'
import LoginPage from '../screens/loginpage'
import { useSelector } from 'react-redux'

export default function AuthGuard({children}){

    const user = useSelector((state)=>state.user);
    // const user = true
    const {pathname} = useLocation();
    const [requestedLocation,setRequestedLocation]= useState(null)

    if(!user){
        if(pathname !== requestedLocation){
            setRequestedLocation(pathname)
        }
        return <LoginPage/>;
    }
    if(requestedLocation && pathname !==requestedLocation){
        setRequestedLocation(null)
        return <Navigate to={requestedLocation}/>
    }
    return <>{children}</>

}