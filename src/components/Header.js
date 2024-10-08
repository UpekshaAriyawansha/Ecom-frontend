import React, { useEffect, useState } from "react";
import {NavLink, Link} from "react-router-dom";
import {  BsSearch } from "react-icons/bs";
import {useDispatch, useSelector} from 'react-redux';

const Header = () => {
    
    const dispatch = useDispatch();

    const cartState = useSelector(state=>state?.auth?.productCart)
    const authState = useSelector(state=>state?.auth)

    // console.log(authState)
    const [total, setTotal]=useState(null)

    useEffect(()=>{
        let sum=0
        for (let index = 0; index < cartState?.length; index++) {
            sum=sum + (Number(cartState[index].quantity)* Number(cartState[index].price))  
            setTotal(sum)          
        }
    },[cartState])


    return ( 
    <>
    <header className="header-top-strip py-3">
        <div className="container-xxl">
            <div className="row">
             
                <div className="col-6">
                <p className="text-white mb-0">
                    Free shipping over $100 & free returns
                </p>
                </div>

                <div className="col-6">
                <p className="text-end text-white mb-0">
                    Hot line: <a className="text-white" 
                    href="tel:+94 788934306">+94 788934306</a>
                </p>
                </div>
           
            </div>
        </div>
    </header>

    <header className="header-upper py-3">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-2">
                    <h2>
                        <Link className="text-white">Dev Corner</Link>
                    </h2>
                </div>
                <div className="col-5">
                    <div className="input-group">
                        <input 
                        type="text" 
                        className="form-control py-2" 
                        placeholder="Search items..." 
                        aria-label="Search items..." 
                        aria-describedby="basic-addon2"
                        />
                        <span 
                        className="input-group-text p-2" 
                        id="basic-addon2">
                            <BsSearch className="fs-4"/>
                        </span>
                    </div>
                </div>
                <div className="col-5">
                    <div className="header-upper-links d-flex align-items-center justify-content-between">
                        <div>
                            <Link className="d-flex align-items-center gap-10 text-white"
                                to="/compare-product">
                            <img src="images/compare.svg" alt="compare"></img>
                            <p className="mb-0">
                                Compare <br/> Products
                            </p>
                            </Link>
                        </div>

                        <div>
                            <Link className="d-flex align-items-center gap-10 text-white"
                                to="/wishlist">
                            <img src="images/wishlist.svg" alt="wishlist"></img>
                            <p className="mb-0">
                                Favourite <br/> Wishlist
                            </p>
                            </Link>
                        </div>

                        <div>
                            <Link className="d-flex align-items-center gap-10 text-white"
                                to={authState?.user ===  null ? "/login":"/my-profile"}>
                            <img src="images/user.svg" alt="User"></img>
                                {
                                    authState?.user ===  null? 
                                            <p className="mb-0">
                                                Login <br/> My Account
                                            </p> :
                                            <p className="mb-0">
                                                Welcome <br/>
                                                {authState?.user?.firstname}
                                            </p>
                                }


                            
                            </Link>
                        </div>

                        <div>
                            <Link className="d-flex align-items-center gap-10 text-white"
                                to="cart">
                            <img src="images/cart.svg" alt=""></img>
                            <div className="d-flex flex-column gap-10">
                                <span className="badge bg-white text-dark">{cartState?.length ? cartState?.length : 0}</span>
                                <p className="mb-0">$ {total?total:0}</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <header className="header-bottom py-1">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="menu-bottom d-flex align-items-center gap-30">
                        <div>
                            <div className="dropdown">
                                <button 
                                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                                    type="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                        <img src="images/menu.svg" alt="Menu"/>
                                        <span className="me-5 d-inline-block">Shop Categories</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item text-white" to="/">Action</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to="/">Another action</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to="/">Something else here</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-links"> 
                            <div className="d-flex align-items-center gap-15">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/product">Our Store</NavLink>
                                <NavLink to="/my-orders">My Orders</NavLink>
                                <NavLink to="/blog">Blogs</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
    
   </>
   )
};

export default Header;