import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import  EmployeeList from "./EmployeeList";
import EmployeeAddEdit from "./EmployeeAddEdit";
import  ProductList from "./ProductList";
import  ProductAddEdit from "./ProductAddEdit";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/EmployeeList" element={<EmployeeList />} />
         <Route path="/EmployeeAddEdit" element={<EmployeeAddEdit />} />
         <Route path="/EmployeeAddEdit/:id"element={<EmployeeAddEdit />}/>
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/ProductAddEdit" element={<ProductAddEdit />} />
         <Route path="/ProductAddEdit/:id" element={<ProductAddEdit />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);