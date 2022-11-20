import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Routes/Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
      <ToastContainer 
      position="top-center"
      theme="dark"
      autoClose={3000}
      />
    </div>
  );
}

export default App;
