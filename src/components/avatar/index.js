
import { SkeletonLine } from "../../helpers/skeleton"

const Avatar = ({ src, title, body }) => {
    return <div className="flex flex-col items-center mb-4">
        <img
            src={src}
            className="mb-4 w-32 rounded-full"
            alt="Avatar"
        />
        <h5 className="mb-2 text-2xl">{title}</h5>
        <p className="text-2xl font-black">{body}</p>
    </div>
}

const AvatarSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="flex flex-col items-center mb-4">
            <svg className="text-skeleton mb-4 w-32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <SkeletonLine className="mb-2 w-32" />
            <SkeletonLine className="w-48" />
        </div>
    </div>
}

export default Avatar

export {
    AvatarSkeleton
}