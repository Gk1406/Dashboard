import { Routes, Route } from "react-router-dom";
import Category from "./Comman/Category";
import Dashboard from "./Comman/Dashboard";
import SubCategory from "./Comman/SubCategory";
import TablePrint from "./Comman/TablePrint";
import Login from "./Comman/Login";
import Product from "./Comman/Product";
import Header from "./Comman/Header";


function App() {


  return (
    <>
<div>
  <Header/>
  <Dashboard/>
      <div className="flex-grow " style={{marginLeft:"300px", marginTop:"-200px"}}>
    <Routes>
      <Route path="/Category" element={<Category/>}/>
      
      <Route path="/SubCategory" element={<SubCategory/>}/>

      <Route path="/" element={<TablePrint/>}/>

      <Route path="/Category" element={<Category/>}/>

      <Route path="/Login" element={<Login/>}/>

      <Route path="/products" element={<Product/>}/>

    </Routes>
    
      </div>

</div>
    
    

    
    </>
  )
}

export default App