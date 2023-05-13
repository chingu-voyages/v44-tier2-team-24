import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./App.css";
import Homepage from "./Pages/HomePage";
import RootLayout from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/',
        element: <Homepage /> },

    ],
  },
]);


function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
