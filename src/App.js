import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./companents/home/Home";
import Header from "./companents/header/Header";
import AddUser from "./companents/pages/AddUser";
import Products from "./companents/pages/Products";
import Basket from "./companents/basket/Basket";
import {useState} from "react";

function App() {

    const [basket, setBasket] = useState([])
    const addToBasket = (el) => {
        setBasket([...basket, el])
    }
    return (
        <>
            <Header/>
            <Routes>

                <Route path="/user" element={<AddUser/>}/>
                <Route path="/basket" element={<Basket basket={basket}/>}/>
                <Route path="/product" element={<Products addToBasket={addToBasket}/>}/>

            </Routes>
        </>
    );
}

export default App;
