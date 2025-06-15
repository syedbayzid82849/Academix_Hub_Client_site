import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myEnroll, setMyEnroll] = useState([]);
    console.log(myEnroll);
    useEffect(() => {
        if (user?.email) {
            const email = encodeURIComponent(user.email);
            axios.get(`http://localhost:3000/myEnrolls?email=${email}`)
                .then(res => {

                    setMyEnroll(res.data);
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong while loading your enrolled courses!',
                    });
                    console.error("Error loading enrollments:", err);
                });
        }
    }, [user?.email]);
    return (
        <div>
            <h2>My Enrolled Courses</h2>
            {
                myEnroll.length ===
            }
        </div>
    );
};

export default MyEnrolled;