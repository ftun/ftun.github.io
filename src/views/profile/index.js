import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthProfileData } from '../../store/reducers/profile';

import imgMe from "../../assets/me.jpeg"
import About from "../../components/About"
import Experience from "../../components/experience"

const Profile = () => {
    const dispatch = useDispatch();
    const { name, title, description, experience } = useSelector(state => state.profile.data);

    useEffect(() => {
        dispatch(fecthProfileData())
    }, [])

    return <>
        <About name={name} title={title} description={description} imgSrc={imgMe} />
        <Experience experience={experience} />
    </>
    
}

export default Profile