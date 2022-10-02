import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';  
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {path: '/' , element: <div>This is default Page</div>},
    {path: '/home' , element: <Home></Home>},
    {path: '/about' , element: <About></About>},


  ])
  return (
    <div className="App">
      <RouterProvider router={router} > </RouterProvider>
     
    </div>
  );
}

export default App;
