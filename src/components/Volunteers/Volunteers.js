import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch('https://ancient-lake-01432.herokuapp.com/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div>
            <h1>ALL Volunteers</h1>
            <ul>
                {
                    volunteers.map(volunteer => <li
                        key={volunteer._id}>
                        name: {volunteer.name}
                        <Link to={`/voluteers/${volunteer._id}`}><button >Details</button></Link>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Volunteers;