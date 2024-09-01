import React from 'react';
import { Section } from "../section"
import Avatar, { AvatarSkeleton } from '../avatar';
import { SkeletonParagraph } from '../../helpers/skeleton'

const Index = ({ name, title, description, imgSrc }) => {
    return <Section>
        <Container>
            {
                name ? 
                <>
                    <Avatar
                        src={imgSrc}
                        title={name}
                        body={title}
                    />
                    <p className="mb-0 mt-0 text-justify">{description}</p>
                </> : <>
                    <AvatarSkeleton />
                    <SkeletonParagraph lines={5} />
                </>
            }
        </Container>
    </Section>
}

const Container = ({ children }) => {
    return <div className="flex flex-wrap mb-10">
        <div className="sm:w-full mb-10 px-4">
            {children}
        </div>
    </div>
}    

export default Index