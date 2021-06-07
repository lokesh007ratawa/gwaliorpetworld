import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Card from './Card';
import Gdata from './Gdata';

const Gallery = () => {

    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    
    // const [Gdata, setImageData] = useState([]);

    // useEffect(() => {
    //     ())
    //     return () => {
    //         cleanup
    //     }
    // }, [input]);

    const handleClose = () => {
        setModalContent(null);
        setShow(false);
    }
    const handleShow = (content) => {
        setModalContent(content);
        setShow(true);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className=" text-center justify-content-center align-items-center mt-3"><h1>Our Happy Customers</h1></div>
                        <div className="row mt-2 ">
                            {
                                Gdata.map((val) => {
                                    return <Card
                                        imgsrc={val.imgsrc}
                                        handleShow={handleShow}
                                        handleClose={handleClose}
                                    />

                                })
                            }
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose} className="modal-close" id="modal-open">
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Images</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body closeButton><img src={modalContent} alt="galleryimages" className="galleryimages"/></Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default Gallery;