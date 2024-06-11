import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">USERNAME</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" name="" id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success">LOGIN</button>

                        </div>

                        <Link class="nav-link" to="/signup">New user Click here</Link>

                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login