import { useEffect, useState } from "react";

export default function UserDetailsFixed({ userId }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        let ignore = false;

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                if (!ignore) {
                    setUserData(data);
                }
            });

        return () => {
            ignore = true;
        };
    }, [userId]);

    if (!userData) return <p>Loading...</p>;
    return (
        <div>
            <h3>{userData.name}</h3>
        </div>
    );
}
