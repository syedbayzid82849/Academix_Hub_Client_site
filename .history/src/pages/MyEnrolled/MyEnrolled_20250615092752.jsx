import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);
    clt

    const token = user.accessToken;

    useEffect(() => {
        if (user?.email) {
            fetch(`https://academix-hub-server.vercel.app/my-groups/${user.email}`, {
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