import React from 'react';
import { Card, Col } from 'react-bootstrap';

const EventCard = (props) => {
    const { image, title, eventColor } = props.event
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body style={{ backgroundColor: eventColor, borderRadius: '5px' }}>
                    <Card.Title className='text-secondary'>{title}</Card.Title>

                </Card.Body>
            </Card>
        </Col>

        /*    <div className="col-md-3">
               <div className="event border">
                   <div className="event-img">
                       <img className="w-100" src={image} alt="" />
                   </div>
                   <div
                       style={{ backgroundColor: eventColor }}
                       className="title-container p-2 "
                   >
                       <h4 className='text-secondary'>{title}</h4>
                   </div>
               </div>
           </div> */


    );
};

export default EventCard;