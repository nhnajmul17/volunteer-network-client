import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletevolunteers, fetchvolunteers } from "../../Redux/VolunteerSlice/VolunteerSlice";
const AllVolunteers = () => {
    // const [volunteer, setVounteer] = useState([]);
    // useEffect(() => {
    //     fetch("https://ancient-lake-01432.herokuapp.com/volunteers")
    //         .then((res) => res.json())
    //         .then((data) => setVounteer(data));
    // }, []);

    /*    const handleDelete = (id) => {
           fetch(`https://ancient-lake-01432.herokuapp.com/deleteVolunteer/${id}`, {
               method: "DELETE",
               headers: { "content-type": "application/json" },
           })
               .then((res) => res.json())
               .then((data) => {
                   if (data.deletedCount) {
                       alert('Deleted Volunteer')
                       window.location.reload()
                   } else {
                   }
               });
       } */


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchvolunteers())
    }, [dispatch])

    const volunteer = useSelector(state => state.volunteer.volunteers)
    const handleDelete = (id) => {
        dispatch(deletevolunteers(id))
    }

    return (
        <div>
            <h1>AllVolunteers {volunteer?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {volunteer?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.age}</td>
                            <button
                                onClick={() => handleDelete(pd._id)}
                                className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllVolunteers;
