import React, { createContext, useContext, useState, useEffect } from "react";

//Create context
const AppContext = createContext();

//Custom hook for consuming context
export const useAppContext = () => useContext(AppContext);

//Provider component
export const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [journal, setJournal] = useState([]);
    const [user, setUser] = useState({ name: "Guest", goalCalories: 2200 });
    const [affirmations, setAffirmations] = useState([]);
    const [loading, setLoading] = useState(false);

    //Example: Loads affirmations (mock or API)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setAffirmations(["You're doing great, keep it up!", "One day at a time champ.", "Strength comes from within buddy, dig deep",]);
            setLoading(false);

        }, 1000);
    }, []);

    const addMeal = (meal) => setMeals((prev) => [...prev, meal]);
    const addWorkout = (workout) => setWorkouts((prev) => [...prev, workout]);
    const addJournalEntry = (entry) => setJournal((prev) => [...prev, entry]);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                meals,
                addMeal,
                workouts,
                addWorkout,
                journal,
                addJournalEntry,
                affirmations,
                loading,
            }}>
            {children}
        </AppContext.Provider>
    );
};