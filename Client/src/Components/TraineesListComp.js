import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TraineesListComp() {

    const [traineeData, setTraineeData] = useState([]);
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const fetchData = () => {
        axios.get("http://localhost:5000/trainees/showAllTrainees")
            .then(response => {
                if(response.data) {
                    setTraineeData(response.data);
                }
            });
    }

    useEffect(() => {
        fetchData();
    },[]);

    const deleteTrainee = (id) => {
        let obj = {
            _id: id
        }
        axios.delete("http://localhost:5000/trainees/deleteTrainee", {data: obj})
            .then(response => {
                if(response.data === "Trainee Deleted Successfully!") {
                    alert(response.data);
                    fetchData();
                } else alert(response.data);
            });
    };

    const showTrainee = () => {
        console.log(name);
        let obj = {
            name: name
        }
        axios.post("http://localhost:5000/trainees/showTrainee", obj)
            .then(response => {
                if(response.data) {
                    setTraineeData(response.data);
                }
            });
    }

    return (
        <>
            <p>
                <button onClick={() => navigate('/trainee/add/')}>Add Trainee</button>
            </p>
            <p>Search: <input type='text' onChange={(e) => setName(e.target.value)} /> <button onClick={showTrainee}>Search By Name</button></p>
            <table border="1" width="100%" cellSpacing="0">
                <tbody>
                <tr><td>ID</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Phone</td>
                    <td>Batch</td>
                    <td>Timings</td>
                    <td>Year</td>
                    <td>Age</td>
                    <td>Actions</td>
                </tr>
            {
                traineeData.map((trainee, i) => {
                    return (
                        <tr key={i}>
                            <td>{trainee._id}</td>
                            <td>{trainee.name}</td>
                            <td>{trainee.username}</td>
                            <td>{trainee.password}</td>
                            <td>{trainee.phone}</td>
                            <td>{trainee.batch}</td>
                            <td>{trainee.timings}</td>
                            <td>{trainee.year}</td>
                            <td>{trainee.age}</td>
                            <td><a href={`/trainee/edit/${trainee._id}`}>Edit</a> / <button onClick={() => deleteTrainee(trainee._id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
        </>
    )
}

export default TraineesListComp;