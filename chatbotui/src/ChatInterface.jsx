import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaBars} from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { TbView360 } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";


const chatbotInterface = () => {
    const bg = {
        backgroundColor: '#F7CA44', 
        width: '18.0625rem',
        height: '18.0625rem',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',  
        top: 0, left: 0,   
        zIndex: -1,
        transform: 'translate(-4.9375rem, -3.6875rem)'
    };
    const secondbg = {
        position: 'fixed',
        zIndex: -1,
    }

  return (
        <div>
            <div style={bg}></div>
            <div style={secondbg} >
                <svg width="390" height="227" viewBox="0 0 390 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-11 0H390V227C363.186 182.883 343.895 165.802 291.581 167.522C215.404 173.328 194.807 159.542 193.163 108.043C184.359 62.5289 157.532 60.985 85.1365 70.4064C15.9308 78.1369 -3.09153 47.2633 -11 0Z" fill="#151E3C"/>
                    </svg>         
            </div>
            
            
            <div className="d-flex flex-column vh-100">
                <nav className="text-white d-flex align-items-center p-2">
                    <div className="d-flex align-items-center flex-grow-1 text-start">
                        <FaBars style={{fontSize: '1.625rem',}}/>
                        <span className="fw-bold" style={{fontSize: '1.75rem', marginLeft:'0.625rem'}}>RTUGPT</span>
                    </div>

                    <div className="flex-grow-1 text-end">
                        <LuRefreshCcw className="me-3" style={{fontSize: '1.66875rem'}} />
                        <TbView360 style={{fontSize: '1.6875rem'}} />
                    </div>
                </nav>

                <div className="flex-grow-1 d-flex flex-column text-secondary justify-content-center align-items-center text-center">
                    <h1>Hello There!</h1>
                    <h1>How can i help?</h1>
                </div>

                <div className="d-flex align-items-center bg-light rounded-pill mx-3 mb-3 p-2 shadow-sm">
                    <input
                        type="text"
                        className="form-control border-0 flex-grow-1 "
                        placeholder="Message..."
                        style={{backgroundColor: 'transparent'}}
                    />
                    <IoIosSend className="text-muted" style={{fontSize: '2.2rem'}} />
                </div>

                <footer className="text-center text-muted p-2" style={{ fontSize: '0.7rem' }}>
                    Responses are tailored to our campus and may not be relevant outside this context.
                </footer>

            </div>
        </div>

  )
}

export default chatbotInterface




// plan b css for second bg

// const thirdbg = {
    //     width: '336px',
    //     height: '166px',
    //     backgroundColor: '#151E3C',
    //     borderRadius: '50%',  
    //     position: 'fixed',  
    //     transform: 'translate(8.9375rem, -0.6875rem)',
    //     top: 0, left: 0,   
    //     zIndex: -1,
    // }

    // const fourthbg = {
    //     width: '249px',
    //     height: '210px',
    //     backgroundColor: '#151E3C',
    //     borderRadius: '50%',  
    //     position: 'fixed',  
    //     transform: 'translate(16.9375rem, 2.31rem)',
    //     top: 0, left: 0,   
    //     zIndex: -1,
    // }