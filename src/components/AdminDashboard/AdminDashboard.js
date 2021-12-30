import React, { useState } from "react";
import AddEvents from "../AddEvents/AddEvents";
import AllEvents from "../AllEvents/AllEvents";
import AllVolunteers from "../AllVolunteers/Allvolunteers";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const [page, setPage] = useState("allVolunteers");

    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setPage("allVolunteers")}
                                        className="admin-menu p-2"
                                    >
                                        All Volunteers
                                    </li>
                                    <li
                                        onClick={() => setPage("addEvents")}
                                        className="admin-menu p-2"
                                    >
                                        Add Events
                                    </li>
                                    <li
                                        onClick={() => setPage("allEvents")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Events
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {page === "allVolunteers" && <AllVolunteers></AllVolunteers>}
                            {page === "addEvents" && <AddEvents></AddEvents>}
                            {page === "allEvents" && <AllEvents></AllEvents>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
