
import Profile from './profile';
import Error from './error';
import Layout from '../components/layout';

const views = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Profile />
            },
            {
                path: "/projects",
                element: <h1>Projects...</h1>
            },
            {
                path: "/contact",
                element: <h1>Contact...</h1>
            },
        ]
    },
]

export default views