import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TraineesAddComp() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const processTrainee = () => {
        console.log(name);
        let obj = {
            name: name,
            username: username,
            password: password
        }
        axios.post("http://localhost:5000/trainees/addTrainee", obj)
            .then(response => {
                if(response.data === "Trainee Added Successfully!") {
                    alert(response.data);
                    navigate("/trainee");
                } else alert(response.data);
            });
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type='text' onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td><input type='text' onChange={(e) => setUsername(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type='text' onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Batch:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Timings:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Subjects:</td>
                        <td><select onChange="">
                                <option>HTML</option>
                                <option>CSS</option>
                                <option>JavaScript</option>
                                <option>ReactJS</option>
                                <option>NodeJS</option>
                                <option>MongoDB</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Timings:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Year:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={processTrainee}>Add Trainee</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
    
}

export default TraineesAddComp;