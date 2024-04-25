
import { Route, Routes } from "react-router-dom";


import Navbar from './Components/Navbar/Navbar';
import Billboard from "./Components/Billboard/Billboard";
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import SignUp from './Pages/SignUp/SignUp';
import './style.css';

function App() {
 

  return (
<main>
  <Navbar/>
  
 <Billboard/>
 <div className='my-2'></div>
<Blogs/>

<Routes>
<Route  path="/login" Component={Login} />
<Route  path="/signup" Component={SignUp} />
<Route  path="/:category" Component={Blogs} />
<Route  path="/blog/:id" Component={BlogDetail} />

</Routes>
  </main>


  )

}

export default App;
