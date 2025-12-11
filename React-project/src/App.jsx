// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Register from './register/register'
// import Login from './login/Login';
// import Protected from './Protected';
// import Admin from "./admin/Admin";
// import Create from "./admin/Create";
// import View from "./admin/View";
// import Nav from "./admin/Nav";
// import { ToastContainer } from 'react-toastify';



// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Register/>
//     },{
//       path:"/login",
//       element:<Login/>
//     },{
//       path:"/home",
//       element:<Protected/>
//     },{
//       path:"/admin",
//       element:<Admin/>,
//       children:[
//         {
//           path:"",
//       element:<Nav/>,
//       children:[
//         {
//           path:"/admin/create",
//           element:<Create/>
//         },{
//           path:"/admin/view",
//           element:<View/>
//         }
//       ]
//         }
//       ]

//     }
// ]);
// const App = () => {
//   return (
//     <>
//     <ToastContainer position='top-right'></ToastContainer>
//     <RouterProvider router={router}></RouterProvider>
//     </>
//   )
// }

// export default App


























































































import React from 'react'
import Child from './propes/Child'
import Parent from './propes/Parent'

const App = () => {
  return (
    <>
      <Parent/>
      <Child name="Sudip" loc="Kolkata"/>
    </>
  )
}

export default App