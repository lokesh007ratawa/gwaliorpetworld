import React from 'react';

const Card = (props) => {

    return (
        <>
            <div className="col-md-4 col-10 mt-1  mx-auto">
                <div className="card padding: 10px "  >
                    <img onClick={() => props.handleShow(props.imgsrc)} src={props.imgsrc} className="card-img-top w-100 " alt="happclients" height="250px"  />
                </div>
            </div>
    
        </>
    );
}

export default Card;