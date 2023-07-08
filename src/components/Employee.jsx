import React from 'react'
import Header from './Header'
import { Button, TextField } from '@mui/material'

const Employee = () => {
    return (
        <div>
            <Header />
            <div className="container mt-3 pt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 ">
                        <div className="row">
                            <div className="col col-12 col-sm-8 col-md-8 col-lg-8 ">
                                <TextField variant='outlined' label='Name'/>
                                <br></br>
                                <br></br>
                                <TextField variant='outlined' label='Designation'/>
                                <br></br>
                                <br></br>
                                <TextField variant='outlined' label='Location'/>
                                <br></br>
                                <br></br>
                                <TextField variant='outlined' label='Salary'/>
                                <br></br>
                                <br></br>
                                <Button variant='contained'>SUBMIT</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}

            export default Employee