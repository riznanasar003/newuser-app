import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">USER</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">LOGIN</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signup">ADD USER</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/viewall">VIEW ALL</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="#">SEARCH</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar