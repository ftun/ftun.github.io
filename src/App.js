import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import views from "./views"

const router = createBrowserRouter(views)

function App() {
	return <RouterProvider router={router} />
}

export default App;
