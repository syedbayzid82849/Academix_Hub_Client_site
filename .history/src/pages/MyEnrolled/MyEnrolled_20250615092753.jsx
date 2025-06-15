import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);
    cl

    const token = user.accessToken;

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-groups/${user.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => setMyGroups(data));
        }
    }, [user]);
    return (
        <div>
            MyEnrolled
        </div>
    );
};

export default MyEnrolled;