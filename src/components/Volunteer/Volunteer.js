import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Volunteer = () => {
    const { id } = useParams();
    const [volunteer, setvolunteer] = useState({})
    useEffect(() => {
        fetch(`https://ancient-lake-01432.herokuapp.com/volunteers/${id}`)
            .then(res => res.json())
            .then(data => setvolunteer(data))
    }, [])
    return (
        <div>
            <h2>This is A Volunteer {id}</h2>
            <h1>{volunteer.name}</h1>
            <h4>{volunteer.age}</h4>
            <h3>{volunteer.email}</h3>
            <p>{volunteer.description}</p>
        </div>
    );
};

export default Volunteer;