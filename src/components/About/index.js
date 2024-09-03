import React from 'react';
import { Section } from "../section"
import Avatar, { AvatarSkeleton } from '../avatar';
import { SkeletonParagraph } from '../../helpers/skeleton'

const Index = ({ name = "", title = "", description = "", imgSrc = null }) => {
    const showSkeleton = name.trim() === ""
    return <Section>
        <div className='flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center'>
            <div className='flex-shrink-0 flex flex-col md:mr-12'>
                {showSkeleton ?
                    <AvatarSkeleton />
                    :
                    <Avatar src={imgSrc} title={name} body={title} />
                }
            </div>
            <div className='md:flex-grow'>
                {showSkeleton ?
                    <SkeletonParagraph lines={5} />
                    :
                    <p className="text-justify">{description}</p>
                }
            </div>
        </div>
    </Section>
}  

export default Index