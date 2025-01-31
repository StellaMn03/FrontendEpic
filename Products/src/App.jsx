import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RouterProvider router={routes} />
      <ToastContainer />
    </div>
  );
}

export default App;
