import React, { useEffect } from 'react';
import About from "../../components/About"
import Experience from "../../components/experience"
import { useSelector, useDispatch } from 'react-redux';
import { fecthProfileData } from '../../store/reducers/profile';
import Spinner from "../../components/spinner"

const Profile = () => {
    const dataProfileStatus = useSelector(state => state.profile.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fecthProfileData())
    }, [])

    if (dataProfileStatus == "successfull") {
        return <>
            <About />
            <Experience />
        </>
    }
        
    return <Spinner />
    
}

export default Profile