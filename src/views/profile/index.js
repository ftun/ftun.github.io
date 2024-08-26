import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthProfileData } from '../../store/reducers/profile';

import imgMe from "../../assets/me.jpeg"
import About from "../../components/About"
import Experience from "../../components/experience"
import Spinner from "../../components/spinner"

const Profile = () => {
    const dispatch = useDispatch();
    const dataProfile = useSelector(state => state.profile);
    const isSuccessful = dataProfile.status === "successful"
    const { name, title, description, experience } = dataProfile.data

    useEffect(() => {
        dispatch(fecthProfileData())
    }, [])

    if (isSuccessful) {
        return <>
            <About name={name} title={title} description={description} imgSrc={imgMe} />
            <Experience experience={experience}/>
        </>
    }
        
    return <Spinner />
    
}

export default Profile