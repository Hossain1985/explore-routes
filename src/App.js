import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';  
import About from './components/About/About';
import Product from './components/Product/Product';
import Main from './Layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';




function App() {
  const router = createBrowserRouter([
    {path: '/' , 
    element: <Main></Main>,
    children:[
      {path: '/', element: <Home></Home>},
      {path: '/home' , element: <Home></Home>},
      {path: '/product', element :<Product></Product>},
      {path: '/friends',
      loader: async() => {
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
       element :<Friends/>},
       {
        path:'/friend/:friendid',
        loader: async ({params}) => {
          // console.log(params.friendId)
          return fetch (`https://jsonplaceholder.typicode.com/users/${params.friendid}`)
        },
        element: <FriendDetails></FriendDetails>
       }
      
    ]},
    {path: '/about' , element: <About></About>},
    {path: '*' , element: <div>This Rout is Not found</div>},

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
