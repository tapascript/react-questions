import { useState } from "react";

export default function UserProfile() {
    const [firstName, setFirstName] = useState("Tapas");
    const [lastName, setLastName] = useState("Adhikary");

    const fullName = `${firstName} ${lastName}`;

    return (
        <div className="p-4">
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
            />
            <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
            />
            <h2>Full Name: {fullName}</h2>
        </div>
    );
}
