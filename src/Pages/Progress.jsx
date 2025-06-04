import React, { useState } from 'react';
import { useAppContext } from '../Context/AppContext';
import './Progress.css';

function Progress() {
  const { meals, workouts } = useAppContext();
  const [filterType, setFilterType] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  const filteredMeals = meals.filter(meal =>
    (filterType === 'all' || filterType === 'meals') &&
    (!filterDate || meal.date === filterDate)
  );

  const filteredWorkouts = workouts.filter(workout =>
    (filterType === 'all' || filterType === 'workouts') &&
    (!filterDate || workout.date === filterDate)
  );

  const totalCalories = filteredMeals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalDuration = filteredWorkouts.reduce((sum, workout) => sum + workout.duration, 0);

  return (
    <div className="progress-page">
      <h2>Progress Overview</h2>

      <div className="filters">
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">All</option>
          <option value="meals">Meals</option>
          <option value="workouts">Workouts</option>
        </select>

        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      <div className="totals">
        {(filterType === 'all' || filterType === 'meals') && (
          <p>Total Calories: {totalCalories} cal</p>
        )}
        {(filterType === 'all' || filterType === 'workouts') && (
          <p>Total Workout Duration: {totalDuration} mins</p>
        )}
      </div>

      {(filterType === 'all' || filterType === 'meals') && (
        <section className="section">
          <h3>Logged Meals</h3>
          {filteredMeals.length > 0 ? (
            <ul>
              {filteredMeals.map((meal, index) => (
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

      {(filterType === 'all' || filterType === 'workouts') && (
        <section className="section">
          <h3>Logged Workouts</h3>
          {filteredWorkouts.length > 0 ? (
            <ul>
              {filteredWorkouts.map((workout, index) => (
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
