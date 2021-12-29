import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
// import { useSelector } from "react-redux";
const AllEvents = () => {
    const [event, setEvent] = useState([]);

    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/events")
            .then((res) => res.json())
            .then((data) => setEvent(data));
    }, [control]);

    // const event = useSelector(state => state.volunteer.events)

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteEvent/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                    alert('events deleted')
                } else {
                    setConrol(false);
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
