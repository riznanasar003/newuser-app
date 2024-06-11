import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [data,setData] = useState(
        {
        "name":"",
        "dob":"",
        "bgroup":"",
        "mobile":"",
        "address":"",
        "pincoede":"",
        "district":"",
        "place":"",
        "emailid":"",
        "uname":"",
        "pass":"",
        "conpass":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        if (data.pass == data.conpass) {
            alert("Password and confirmation password are same")
            
        } else {
            alert("Password and confirmation password are not same")
            
        }
        console.log(data)
        axios.post("http://localhost:8082/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">NAME</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>


                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">DATE OF BIRTH</label>
                        <input type="date" name="dob" value={data.dob} onChange={inputHandler} id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">BLOOD GROUP</label>
                        <select name="bgroup" value={data.bgroup} onChange={inputHandler} id="" className="form-control">
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">MOBILE NO</label>
                        <input type="text" className="form-control" name="mobile" value={data.mobile} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        
                        <label htmlFor="" className="form-label">ADDRESS</label>
                        <textarea name="address" value={data.address} onChange={inputHandler} id="" className="form-control"></textarea>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        
                        <label htmlFor="" className="form-label">PINCODE</label>
                        <input type="text" className="form-control" name="pincoede" value={data.pincoede} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        
                        <label htmlFor="" className="form-label">DISTRICT</label>
                        <select name="district" value={data.district} onChange={inputHandler} id="" className="form-control">
                            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Pathanamthitta">Pathanamthitta</option>
                            <option value="Alappuzha">Alappuzha</option>
                            <option value="Kottayam">Kottayam</option>
                            <option value="Idukki">Idukki</option>
                            <option value="Ernakulam">Ernakulam</option>
                            <option value="Thrissur">Thrissur</option>
                            <option value="Palakkad">Palakkad</option>
                            <option value="Malappuram">Malappuram</option>
                            <option value="Kozhikode">Kozhikode</option>
                            <option value="Wayanad">Wayanad</option>
                            <option value="Kannur">Kannur</option>
                            <option value="Kasaragod">Kasaragod</option>
                        </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">PLACE</label>
                        <input type="text" className="form-control" name="place" value={data.place} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            
                        <label htmlFor="" className="form-label">EMAIL ID</label>
                        <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label htmlFor="" className="form-label">USERNAME</label>
                        <input type="text" className="form-control" name="uname" value={data.uname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" name="pass" value={data.pass} onChange={inputHandler} id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                        <input type="password" name="conpass" value={data.conpass} onChange={inputHandler} id="" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success" onClick={readValue}>REGISTER</button>


                        </div>
                        <Link class="nav-link" to="/">Back to Login</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup