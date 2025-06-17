import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageCourse = () => {
    const { user } = useContext(AuthContext);
    const [myCourses, setMyCourses] = useState([]);
    console.log(myCourses);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://academix-hub-server.vercel.app/manage-course/${user?.email}`)
            .then(res => {
                setMyCourses(res.data);

            })
            .catch(err => {
                console.log(err);
            })
    }, [user]);

    // handle edit btn
    const handleEdit = (id) => {
        navigate(`/edit-course/${id}`)
    }

    // handleDelete btn 
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://academix-hub-server.vercel.app/all-course/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const filter = myCourses.filter(course => course._id !== id);
                            console.log(filter);
                            setMyCourses(filter);
                            Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire('Error!', 'Something went wrong.', 'error');
                    });
            }

        })
    }



    return (
        


    );
};

export default ManageCourse;