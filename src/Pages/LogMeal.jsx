import React, { useState } from 'react';
import { useAppContext } from '../Context/AppContext';

function LogMeal() {
    const {addMeal} = useAppContext();
    const [meal, setMeal] = useState('');
    const [calories, setCalories] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //validation 
        if (!meal || !calories) {
            setError('Please fill in all fields.')
            return;
        }

        if (isNaN(calories)) {
            setError('Calories must be a number.');
            return;
        }

        setError('');

        //Saves to global state or backend
        console.log('Meal logged:', { meal, calories });

        //Clears the form
        addMeal({ mealName: meal, calories: parseInt(calories)});
        setMeal('');
        setCalories('');
    };

    return (
        <div>
            <h2>Log Your Meal</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="meal">Meal Name:</label>
                    <input
                        type="text"
                        id="meal"
                        value={meal}
                        onChange={(e) => setMeal(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="calories">Calories:</label>
                    <input
                        type="text"
                        id="calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red'}}>{error}</p>}
                <button type="submit">Log Meal</button>
            </form>
        </div>
    );
}

export default LogMeal;