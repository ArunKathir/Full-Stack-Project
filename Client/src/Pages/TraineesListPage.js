import TraineesListComp from "../Components/TraineesListComp";
import { NavLink } from 'react-router-dom';

function TraineesListPage() {
    return (
        <>
            <NavLink to="/trainee">Trainees</NavLink> | <NavLink to="/batch">Batches</NavLink> | <NavLink to="/class">Classes</NavLink>
    
            <h1>Trainees - List</h1>

            <TraineesListComp />
        </>
    )
}

export default TraineesListPage;