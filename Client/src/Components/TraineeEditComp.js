import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TraineesEditComp() {

    const q = useParams();

    const navigate = useNavigate();

    const [id, setId] = useState(q.id);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        let obj = {
            id: id
        }
        axios.post("http://localhost:5000/trainees/showTrainee", obj)
            .then(response => {
                if(response.data) {
                    setName(response.data[0].name);
                    setUsername(response.data[0].username);
                    setPassword(response.data[0].password);
                }
            });
    },[]);

    const processTrainee = () => {
        let obj = {
            _id: id,
            name: name,
            username: username,
            password: password
        }
        axios.put("http://localhost:5000/trainees/updateTrainee", obj)
            .then(response => {
                if(response.data === "Trainee Updated Successfully!") {
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
                        <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td><input type='text' value={username} onChange={(e) => setUsername(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type='text' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
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

export default TraineesEditComp;