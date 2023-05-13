import { createBrowserRouter } from 'react-router-dom';
import "./App.css";
import Homepage from "./Pages/HomePage";
import RootLayout from "./Pages/Root";

createBrowserRouter([
  { path: '/'},
])


function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
