import React, { useState } from 'react';
import { useAppContext } from '../Context/AppContext';


function LogWorkout() {

    const { addWorkout } = useAppContext();
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //Basic validation
        if (!type || !duration) {
            setError('Workout type and duration are required.');
            return;
        }

        if (isNaN(duration)) {
            setError('Duration must be a number.');
            return;
        }

        setError('');

        //Should save to context API
        console.log('Workout logged:', { type, duration, notes });

        addWorkout({
            type,
            duration:  parseInt(duration),
            notes,
        });

        // Clear form
        setType('');
        setDuration('');
        setNotes('');

    };

    return (
        <div>
            <h2>Log your Workout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="type">Workout Type:</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}>

                        <option value="">-- Select Type --</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Strength">Strength</option>
                        <option value="Flexibility">Flexibility</option>
                        <option value="HIIT">HITT</option>
                        <option value="Other">Other</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="duration">Duration (minutes):</label>
                    <input
                        type="text"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)} />

                </div>

                <div>
                    <label htmlFor="notes">Notes (optional):</label>
                    <textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)} />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Log Workout</button>
            </form>
        </div>
    );



}

export default LogWorkout;