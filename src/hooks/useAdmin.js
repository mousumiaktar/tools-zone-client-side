import { useEffect, useState } from "react";


const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        if (user.email) {

            fetch(`http://localhost:5000/admin/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                });
        }
    }, [user])
    return [admin, adminLoading];
};

export default useAdmin;