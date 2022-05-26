import { useEffect, useState } from "react";


const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        if (user.email) {

            fetch(`https://stormy-anchorage-56703.herokuapp.com/admin/${user.email}`)
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