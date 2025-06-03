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
    const [communityPosts, setCommunityPosts] = useState(() => {
        const saved = localStorage.getItem("communityPosts");
        return saved ? JSON.parse(saved) : [];
    });

    //Example: Loads affirmations (mock or API)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setAffirmations(["You're doing great, keep it up!", "One day at a time champ.", "Strength comes from within buddy, dig deep",]);
            setLoading(false);

        }, 1000);
    }, []);

    useEffect(() => {
        const storedMeals = JSON.parse(localStorage.getItem("meals"));
        const storedWorkouts = JSON.parse(localStorage.getItem("workouts"));
        if (storedMeals) setMeals(storedMeals);
        if (storedWorkouts) setWorkouts(storedWorkouts);
    }, []);
    

    useEffect(() => {
        localStorage.setItem("communityPosts", JSON.stringify(communityPosts));
    }, [communityPosts]);

    useEffect(() => {
        localStorage.setItem("meals", JSON.stringify(meals));
    }, [meals]);
    
    useEffect(() => {
        localStorage.setItem("workouts", JSON.stringify(workouts));
    }, [workouts]);
    

    const addMeal = (meal) => setMeals((prev) => [...prev, { ...meal, date: new Date().toISOString().split('T')[0] }]);
    const addWorkout = (workout) => setWorkouts((prev) => [...prev, { ...workout, date: new Date().toISOString().split('T')[0] }]);
    const addJournalEntry = (entry) => setJournal((prev) => [...prev, entry]);
    const addCommunityPost = (post) => setCommunityPosts((prev) => [...prev, { ...post, id: Date.now(), likes: 0, comments: [] }]);
    const likePost = (postId) => setCommunityPosts((prevPosts) => prevPosts.map((post) => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
    const addComment = (postId, comment) => {setCommunityPosts(prev => prev.map(post => post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
            )
        );
    };


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
                communityPosts,
                addCommunityPost,
                likePost,
                addComment
            }}>
            {children}
        </AppContext.Provider>
    );
};