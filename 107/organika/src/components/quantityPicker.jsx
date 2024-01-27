import "./quantityPicker.css";
import { useState } from "react";


function QuantityPicker()
{
    function decrease(){
        console.log("Decreasing");
    }
    //create the increase function
    function increase(){
        console.log("Increasing");
        //small change`
    }


    return (
        <div className="quantityPicker">
        <button onClick={decrease} >-</button>
        <label>1</label>
        <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;