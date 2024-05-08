import React, { useState } from 'react'
import icon7 from "../images/icon7.svg"
import icon8 from "../images/icon8.svg"
import icon9 from "../images/icon9.svg"
import icon10 from "../images/icon10.svg"
import icon11 from "../images/icon11.svg"
import jira from '../images/jira.svg'
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"
import icon4 from "../images/icon4.svg"
import icon5 from "../images/icon5.svg"
import icon6 from "../images/icon6.svg"
import Widgets from '../component/widgets'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row } from 'react-bootstrap'


export default function Index(props) {
    const [modalShow, setModalShow] =useState(false);
    const handleClose = () => setModalShow(false);


    console.log(jira);

    const card1 = [
        { icon: icon7, name: "note" },
        { icon: icon8, name: "task" },
        { icon: icon9, name: "gitLab" },
        { icon: icon10, name: "gitLab" },
        { icon: icon11, name: "gitLab" },
    ]
    const card2 = [
        { icon: jira, name: "jira" },
        { icon: icon2, name: "task" },
        { icon: jira, name: "jira" },
    ]
    const card3 = [
        { icon: icon3 },
        { icon: icon4 },
        { icon: icon5 },
        { icon: icon6 }
    ]



    return (
        <>

            <div className="main">
                <div className="container">
                    <div className="heading d-flex position-relative ">

                        <div className="page-header ">
                            <h1>good afternoon, shahil</h1>
                        </div>
                        <div className="icon-first position-absolute" onClick={() => setModalShow(true)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.78277 15.4228V4.33945M4.24109 9.88109H15.3244" stroke="#101828" stroke-width="1.4571" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="widgets pt-5 pb-5">
                        <Row >
                            {
                                card1.map(i => <Widgets icon={i.icon} name={i.name} />)
                            }

                        </Row>

                    </div>
                    <div className="widgets pb-5">
                        <div className="widget-title d-flex">
                            <h6>product</h6>
                            <span className="icon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5014 14.3946C13.5014 14.6045 13.5848 14.8058 13.7332 14.9542C13.8816 15.1026 14.0829 15.1859 14.2928 15.1859C14.5026 15.1859 14.7039 15.1026 14.8523 14.9542C15.0007 14.8058 15.0841 14.6045 15.0841 14.3946C15.0841 14.1847 15.0007 13.9834 14.8523 13.835C14.7039 13.6866 14.5026 13.6032 14.2928 13.6032C14.0829 13.6032 13.8816 13.6866 13.7332 13.835C13.5848 13.9834 13.5014 14.1847 13.5014 14.3946ZM19.0428 14.3946C19.0428 14.6046 19.1262 14.806 19.2747 14.9545C19.4232 15.103 19.6246 15.1864 19.8346 15.1864C20.0446 15.1864 20.246 15.103 20.3945 14.9545C20.543 14.806 20.6264 14.6046 20.6264 14.3946C20.6264 14.1846 20.543 13.9832 20.3945 13.8347C20.246 13.6862 20.0446 13.6028 19.8346 13.6028C19.6246 13.6028 19.4232 13.6862 19.2747 13.8347C19.1262 13.9832 19.0428 14.1846 19.0428 14.3946ZM7.9591 14.3946C7.9591 14.6046 8.04253 14.806 8.19102 14.9545C8.33952 15.103 8.54092 15.1864 8.75093 15.1864C8.96093 15.1864 9.16234 15.103 9.31083 14.9545C9.45933 14.806 9.54275 14.6046 9.54275 14.3946C9.54275 14.1846 9.45933 13.9832 9.31083 13.8347C9.16234 13.6862 8.96093 13.6028 8.75093 13.6028C8.54092 13.6028 8.33952 13.6862 8.19102 13.8347C8.04253 13.9832 7.9591 14.1846 7.9591 14.3946Z" stroke="#4B4D57" stroke-width="1.9428" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <Row>
                            {
                                card2.map(i => <Widgets icon={i.icon} name={i.name} />)
                            }
                        </Row>

                    </div>

                    <div className="widgets pb-5">
                        <div className="widget-title d-flex">
                            <h6>options</h6>
                            <span className="icon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5014 14.3946C13.5014 14.6045 13.5848 14.8058 13.7332 14.9542C13.8816 15.1026 14.0829 15.1859 14.2928 15.1859C14.5026 15.1859 14.7039 15.1026 14.8523 14.9542C15.0007 14.8058 15.0841 14.6045 15.0841 14.3946C15.0841 14.1847 15.0007 13.9834 14.8523 13.835C14.7039 13.6866 14.5026 13.6032 14.2928 13.6032C14.0829 13.6032 13.8816 13.6866 13.7332 13.835C13.5848 13.9834 13.5014 14.1847 13.5014 14.3946ZM19.0428 14.3946C19.0428 14.6046 19.1262 14.806 19.2747 14.9545C19.4232 15.103 19.6246 15.1864 19.8346 15.1864C20.0446 15.1864 20.246 15.103 20.3945 14.9545C20.543 14.806 20.6264 14.6046 20.6264 14.3946C20.6264 14.1846 20.543 13.9832 20.3945 13.8347C20.246 13.6862 20.0446 13.6028 19.8346 13.6028C19.6246 13.6028 19.4232 13.6862 19.2747 13.8347C19.1262 13.9832 19.0428 14.1846 19.0428 14.3946ZM7.9591 14.3946C7.9591 14.6046 8.04253 14.806 8.19102 14.9545C8.33952 15.103 8.54092 15.1864 8.75093 15.1864C8.96093 15.1864 9.16234 15.103 9.31083 14.9545C9.45933 14.806 9.54275 14.6046 9.54275 14.3946C9.54275 14.1846 9.45933 13.9832 9.31083 13.8347C9.16234 13.6862 8.96093 13.6028 8.75093 13.6028C8.54092 13.6028 8.33952 13.6862 8.19102 13.8347C8.04253 13.9832 7.9591 14.1846 7.9591 14.3946Z" stroke="#4B4D57" stroke-width="1.9428" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <Row>
                            {
                                card3.map(i => <Widgets icon={i.icon} />)
                            }

                        </Row>

                    </div>
                </div>
            </div>

            {/* <div className="modal" id="exampleModal" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-capitalize">invite user</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className="text-capitalize">email</h6>
                            <textarea className="text-capitalize w-100">enter your email</textarea>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white text-capitalize border-secondary" data-bs-dismiss="modal">cancel</button>
                            <button type="button" className="btn btn-dark text-capitalize border-secondary">invite user</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <Modal show={modalShow} onHide={handleClose}
                // size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Invite User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Email</h4>
                   <textarea className='w-100'>Enter your email</textarea>
                </Modal.Body>
                <Modal.Footer>
                <Button className='btn btn-secondary'   >Cancel</Button>
                    <Button  className='btn btn-dark'>InviteUser</Button>
                </Modal.Footer>
            </Modal>
        


        </>
    )
}
