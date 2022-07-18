/*Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)*/
import React from "react";
import BasicInfo from "./medium";

const People = () => {
    const list = [
        {
            name: "Mary",
            number: "111.222.3333",
            birthdate: "06/09/1994",
            loctaion: "Memphis, TN"
        },

        {
            name: "Joseph",
            number: "444.555.6666",
            birthdate: "06/09/2003",
            loctaion: "Miami, Fl"
        },

        {
            name: "Amari",
            number: "777.888.9999",
            birthdate: "06/09/1999",
            loctaion: "Charlotte, NC"
        }
    ];

    
    return (
        <div>
            {list.map((info) => (
                <BasicInfo name={info.name} age={info.number} dateOfBirth={info.birthdate} number={info.location} />
            ))}
        </div>
    );
    
}

export default People;