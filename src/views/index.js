
import Profile from './profile';
import Error from './error';

const views = [
    {
        path: "/",
        element: <Profile />,
        errorElement: <Error />
    },
]

export default views