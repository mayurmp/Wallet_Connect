import React, { useState } from 'react'

export const Card = () => {

    return (
        <>
            <div class="row row-cols-1 row-cols-md-2 g-4" style={{ margin: "1rem 1rem 0rem 1rem", backgroundColor: " #E7E9EB" }}>
                <div class="col">
                    <div class="card">
                        <div class="card-body" style={{ height: "300px" }}>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item mx-1 navigation-item"
                                        style={{
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s ease',
                                            backgroundColor: 'transparent',
                                            borderRadius: "10px 10px 10px 10px",
                                            textAlign: "center",
                                            padding: "0px 10px 0px 10px"
                                        }}
                                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffffff'; }}
                                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}>Deposite</li>
                                    <li className="nav-item mx-5 navigation-item" style={{
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease',
                                        backgroundColor: 'transparent',
                                        borderRadius: "10px 10px 10px 10px",
                                        textAlign: "center",
                                        padding: "0px 10px 0px 10px"
                                    }}
                                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffffff'; }}
                                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}>Borrow</li>
                                    <li className="nav-item mx-5 navigation-item" style={{
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease',
                                        backgroundColor: 'transparent',
                                        borderRadius: "10px 10px 10px 10px",
                                        textAlign: "center",
                                        padding: "0px 10px 0px 10px"
                                    }}
                                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffffff'; }}
                                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}>Withdraw</li>
                                    <li className="nav-item mx-4 navigation-item" style={{
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease',
                                        backgroundColor: 'transparent',
                                        borderRadius: "10px 10px 10px 10px",
                                        textAlign: "center",
                                        padding: "0px 10px 0px 10px"
                                    }}
                                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffffff'; }}
                                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}>Repay</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body" style={{ height: "300px" }}>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item mx-5 navigation-item"
                                      
                                        style={{
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s ease',
                                            backgroundColor: 'transparent',
                                            borderRadius: "10px 10px 10px 10px",
                                            textAlign: "center",
                                            padding: "0px 10px 0px 10px"
                                        }}
                                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffffff'; }}
                                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}>Deposite</li>
                                    <li className="nav-item mx-5 navigation-item" style={{
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease',
                                        backgroundColor: 'transparent',
                                        borderRadius: "10px 10px 10px 10px",
                                        textAlign: "center",
                                        padding: "0px 10px 0px 10px"
                                    }}
                                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffffff'; }}
                                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}>Borrow</li>
                                    <li className="nav-item mx-5 navigation-item" style={{
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease',
                                        backgroundColor: 'transparent',
                                        borderRadius: "10px 10px 10px 10px",
                                        textAlign: "center",
                                        padding: "0px 10px 0px 10px"
                                    }}
                                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffffff'; }}
                                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}>Unwind</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{ margin: "0rem 1rem 0rem 1rem", backgroundColor: " #E7E9EB" }}>
                <div class="col">
                    <div class="card" style={{ marginBottom: "1rem" }}>
                        <div style={{ height: "40px", borderBottom: "1px solid black" }}>
                            <h6 style={{ margin: "10px 0px 0px 5px" }}>Your deposite assets</h6>
                        </div>
                        <div class="card-body" style={{ height: "110px" }}>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ marginBottom: "1rem" }}>
                        <div style={{ height: "40px", borderBottom: "1px solid black" }}>
                            <h6 style={{ margin: "10px 0px 0px 5px" }}>Overview</h6>
                        </div>
                        <div class="card-body" style={{ height: "110px" }}>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ marginBottom: "1rem" }}>
                        <div style={{ height: "40px", borderBottom: "1px solid black" }}>
                            <h6 style={{ margin: "10px 0px 0px 5px" }}>Other States</h6>
                        </div>
                        <div class="card-body" style={{ height: "110px" }}>
                        </div>
                    </div>
                </div>
            </div></>
    )
}