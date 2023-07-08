import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Home = () => {
    var[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data);
            setData(response.data)
        })
        .catch(err=>console.log(err));
    },[])

  return (
    <div>
        <Header/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontFamily:'cursive', color:"red"}}>ID</TableCell>
                        <TableCell style={{fontFamily:'cursive', color:"red"}}>Name</TableCell>
                        <TableCell style={{fontFamily:'cursive', color:"red"}}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((value,index)=>{
                        return<TableRow>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.email}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>
        </TableContainer>
        
    </div>
  )
}

export default Home