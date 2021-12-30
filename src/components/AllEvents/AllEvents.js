import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchevents } from "../../Redux/VolunteerSlice/VolunteerSlice";
import { useSelector } from "react-redux";
const AllEvents = () => {
    const dispatch = useDispatch()
    const [control, setControl] = useState(false);
    // const [event, setEvent] = useState([]);

    /*    useEffect(() => {
           fetch("https://ancient-lake-01432.herokuapp.com/events")
               .then((res) => res.json())
               .then((data) => setEvent(data));
       }, [control]);
    */

    useEffect(() => {
        dispatch(fetchevents())

    }, [dispatch, control])

    const event = useSelector(state => state.volunteer.events)

    const handleDelete = (id) => {
        fetch(`https://ancient-lake-01432.herokuapp.com/deleteEvent/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert('events deleted')
                } else {
                    setControl(false);
                }
            });
    };

    return (
        <div className="container">
            <h1>Events {event?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Event Title</th>
                        <th>Event description</th>
                        <th>Image Link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {event?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd.title}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
                            <button
                                onClick={() => handleDelete(pd._id)}
                                className="btn bg-danger p-2"
                            >
                                Delete
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllEvents;
