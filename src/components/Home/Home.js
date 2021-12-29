import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchevents } from "../../Redux/VolunteerSlice/VolunteerSlice";
import EventCard from "../EventCard/EventCard";


const Home = () => {
    // const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();



    const handleInput = (e) => {
        setSearch(e.target.value);
    };
    const handleSearch = () => {
        // fetch(`https://ancient-lake-01432.herokuapp.com/searchEvent?search=${search}`)
        /*   fetch(`https://ancient-lake-01432.herokuapp.com/searchEvent?search=${search}`)
              .then((res) => res.json())
              .then((result) => setEvents(result));
   */
    };


    useEffect(() => {
        dispatch(fetchevents())

    }, [dispatch])

    const allevents = useSelector((state) => state.volunteer.events)
    console.log(allevents);




    return (
        <div>
            <div className="text-center mt-5">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <div className="input-box">
                    <input onChange={handleInput} type="text" className="p-2 m-3" />
                    <button onClick={handleSearch} className="btn btn-success m-1">
                        Search
                    </button>
                </div>
            </div>
            <div className="events-container p-5">
                <Row xs={1} md={4} className="g-4">
                    {allevents.map((event) => <EventCard key={event._id} event={event}></EventCard>)}
                </Row>
                {/* <div className="row container">

                    {allevents.map((event) => <EventCard key={event._id} event={event}></EventCard>)}

                </div> */}
            </div>
        </div>
    );
};

export default Home;
