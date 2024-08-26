const Avatar = ({ src, name, title }) => {
    return <div className="text-center mb-4">
        <img
            src={src}
            className="mx-auto mb-4 w-32 rounded-full shadow-lg"
            alt="Avatar"
        />
        <h5 className="mb-2 text-2xl">{name}</h5>
        <p className="text-2xl font-black">{title}</p>
    </div>
}

export default Avatar