import React from 'react'
import useInput from '../custom-hooks/useInput';

function UserForm() {

    const[firstName,bindFirstName,resetFirstName]=useInput('')
    const[lastName,bindLastName,resetLastName]=useInput('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>First Name :</label>
            <input {...bindFirstName} type="text" value={firstName} /><br/>
            <label>Last Name :</label>
            <input {...bindLastName} type="text" value={lastName} /><br/>
            <button>Submit</button>
        </form>
    )
}

export default UserForm
