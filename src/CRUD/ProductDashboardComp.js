import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const ProductDashboardComp = () => {
    const[itemData,setItemData] = useState([]);

    useEffect(()=>{
       fetchdata()
    },[])
    const fetchdata= ()=>{
        axios.get(`http://localhost:8888/products`).then((res)=>{
            setItemData(res.data)
        }).catch((error)=>{})
    }

    const deleteRecord =(id)=>{
        if(window.confirm(`are you sure u want to delete record id :${id}`)){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
                window.alert("record delete Successfully");
                fetchdata();

            }).catch((error)=>{})
    }
}
    return (
        <div>
            <h2>this is ProductDashboardComp</h2>
            <Link to ="/maindash/productadd" className='btn btn-primary mb-2'><AddIcon>Add</AddIcon></Link>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr className='table-dark'>
                        <th>Sr.No</th><th>Name</th><th>price</th><th>Company</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     itemData.length>0 &&   itemData.map((val,index)=>{
                            return <tr>
                                {/* <td>{index+1}</td> */}
                                <td>{val.id}</td>
                                <td>{val.pname}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td>
                                    <Link to={`/maindash/productupdate/${val.id}`}> <button type='button' className='btn btn-outline-primary'><EditIcon></EditIcon></button></Link>
                                   
                                    <button type='button' className='btn btn-outline-danger' onClick={()=>deleteRecord(val.id)}><DeleteIcon></DeleteIcon></button>

                                </td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ProductDashboardComp
