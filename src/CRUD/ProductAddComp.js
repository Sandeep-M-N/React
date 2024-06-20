import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductAddComp = () => {
    const nav= useNavigate();
    const [itemdata,setitemdata] = useState({
        pname:"",
        price:"",
        company:""
    });
    const inputChangeHandler = (events)=>{
        const {type,name,value} = events.target;
        setitemdata({...itemdata,[name]:value});
    }
    const addRecord=(event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8888/products`,itemdata).then(()=>{
            window.alert("record added successfully");
            nav('/maindash/productdash');
        }).catch((error)=>{})
    }
    return (
        <div>
            <h2>this is ProductAddComp</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addRecord}>
                        <label className='form-label'>Enter Product Name</label>
                        <input type='text' name='pname' onChange={inputChangeHandler} value={itemdata.pname} className='form-control'/>
                        <label className='form-label'>Enter Product price</label>
                        <input type='text' name='price' onChange={inputChangeHandler} value={itemdata.price} className='form-control'/>
                        <label className='form-label'>Enter Product Company</label>
                        <input type='text' name='company' onChange={inputChangeHandler} value={itemdata.company} className='form-control'/>
                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                    </form>
                </div>

                

            </div>
        </div>
    )
}

export default ProductAddComp
