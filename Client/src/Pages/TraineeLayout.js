import { NavLink } from 'react-router-dom';

function TraineeLayoutPage() {
    return (
        <>
            <NavLink to="/trainee">Trainees</NavLink> | <NavLink to="/batch">Batches</NavLink> | <NavLink to="/class">Classes</NavLink>
        </>
    )
}

export default TraineeLayoutPage;