const SkeletonParagraph = ({ lines = 3, className = "" }) => {
    let items = []
    for (let i = 0; i < lines; i++) {
        items.push(<SkeletonLine key={i} className={className} />)
    }

    return <div role="status" className="animate-pulse">{items}</div>
}

const SkeletonLine = ({ className = "" }) => <div className={`bg-skeleton ${className}`}></div>

const SkeletonText = ({ className = "", width = 0 }) => {
    return <div className={`className max-w-[${width}px]`}>
        <div className="bg-skeleton ml-0 mb-0 m-1 w-24"></div>
        <div className="bg-skeleton ml-0 mb-0 m-1 w-32"></div>
        <div className="bg-skeleton ml-0 mb-0 m-1 w-24"></div>
        <div className="bg-skeleton ml-0 mb-0 m-1 w-full"></div>
    </div>
}

export {
    SkeletonLine,
    SkeletonParagraph,
    SkeletonText,
}