import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedData] = useState([])
    const fetchData = ()=>{
        axios.get("http://localhost:8082/view").then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">NAME</th>
                                            <th scope="col">DATE OF BIRTH</th>
                                            <th scope="col">BLOOD GROUP</th>
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">MOBILE NO</th>
                                            <th scope="col">PINCODE</th>
                                            <th scope="col">DISTRICT</th>
                                            <th scope="col">PLACE</th>
                                            <th scope="col">EMAIL ID</th>
                                            <th scope="col">USERNAME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value, index)=>{
                                            return  <tr>
                                            <td>{value.name}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.bgroup}</td>
                                            <td>{value.address}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.pincoede}</td>
                                            <td>{value.district}</td>
                                            <td>{value.place}</td>
                                            <td>{value.emailid}</td>
                                            <td>{value.uname}</td>
                                        </tr>
                                        }
                                       )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll