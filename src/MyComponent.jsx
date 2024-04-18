import React, {useState} from "react";



export default function MyComponent() {

    const [name, setName] = useState();
    const updateName = () =>  {
        setName("Ellie");
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>)


}

