
const HOST_LOCAL = "http://localhost:4000/api"
const HOTS_PROD = "https://api-profile-five.vercel.app/api"

export const getUrlApi = () => {
    if (process.env.NODE_ENV == "production") return HOTS_PROD
    return HOST_LOCAL
}