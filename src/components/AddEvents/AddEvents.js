import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";

const AddEvents = () => {
    const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://ancient-lake-01432.herokuapp.com/addevents", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('Events added')
        reset();
    };
    return (
        <div>
            <h1 className="mt-5 text-center text-success">Please Add Events</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="Title"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <select {...register("eventColor")} className="p-2 m-2 w-100">
                                <option value="black">black</option>
                                <option value="purple">purple</option>
                                <option value="navy">navy</option>
                                <option value="orange">orange</option>
                                <option value="yellow">yellow</option>
                                <option value="skyblue">skyblue</option>
                            </select>
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-success w-50 mb-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvents;
