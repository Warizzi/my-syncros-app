import React, { useState } from 'react';
import { useAppContext } from '../Context/AppContext';

function Progress() {
    const { meals, workouts } = useAppContext();
    const [filterType, setFilterType] = useState('all');
    const [filterDate, setFilterDate] = useState('');

    // Apply filters
    const filteredMeals = meals.filter(meal =>
        (filterType === 'all' || filterType === 'meals') &&
        (!filterDate || meal.date === filterDate)
    );

    const filteredWorkouts = workouts.filter(workout =>
        (filterType === 'all' || filterType === 'workouts') &&
        (!filterDate || workout.date === filterDate)
    );

    // Calculate totals
    const totalCalories = filteredMeals.reduce((sum, meal) => sum + meal.calories, 0);
    const totalDuration = filteredWorkouts.reduce((sum, workout) => sum + workout.duration, 0);

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Progress Overview</h2>

            <div>
                <label>Filter by:</label>
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="meals">Meals</option>
                    <option value="workouts">Workouts</option>
                </select>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                />
            </div>

            {/* Totals Section */}
            <div style={{ marginTop: '1rem' }}>
                {(filterType === 'all' || filterType === 'meals') && (
                    <p><strong>Total Calories:</strong> {totalCalories} cal</p>
                )}
                {(filterType === 'all' || filterType === 'workouts') && (
                    <p><strong>Total Workout Duration:</strong> {totalDuration} mins</p>
                )}
            </div>

            {/*Meals Section*/}
            {(filterType === 'all' || filterType === 'meals') && (
                <section>
                    <h3>Logged Meals</h3>
                    {meals.length > 0 ? (
                        <ul>
                            {meals.map((meal, index) => (
                                <li key={index}>
                                    <strong>{meal.mealName}</strong> - {meal.calories} cal
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No meals logged yet.</p>
                    )}
                </section>
            )}


            <hr />

            {/*Workouts Section */}
            {(filterType === 'all' || filterType === 'workouts') && (
                <section>
                    <h3>Logged Workouts</h3>
                    {workouts.length > 0 ? (
                        <ul>
                            {workouts.map((workout, index) => (
                                <li key={index}>
                                    <strong>{workout.type}</strong> — {workout.duration} mins {workout.notes && `(${workout.notes})`}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No workouts logged yet.</p>
                    )}
                </section>
            )}


        </div>
    );
}

export default Progress;