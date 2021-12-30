// import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addvolunteer } from '../../Redux/VolunteerSlice/VolunteerSlice';
import './Register.css'


const RegisterForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
    /* const onSubmit = data => {
        axios.post('https://ancient-lake-01432.herokuapp.com/volunteers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('volunteer added')
                    reset();
                }
            })
    } */
    const onSubmit = data => {
        dispatch(addvolunteer(data))
        reset()
    }

    return (
        <div>
            <div className="logo">
                <img
                    className="p-2 w-25 mb-5"
                    src="https://i.ibb.co/QvMLCj4/Group-1329.png"
                    alt="Volunteer Network"
                />
            </div>


            <div className='registration-form border'>

                <h4>Register As A Volunteer</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
                    <input type="number" {...register("age", { min: 18, max: 99 })} placeholder='age' />
                    <input {...register("email")} placeholder='email' />
                    <textarea {...register("description")} placeholder='description' />

                    <input className='mt-2 bg-success' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default RegisterForm;