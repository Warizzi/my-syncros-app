import React, { useState } from "react";
import { useAppContext } from "../Context/AppContext";

function Journal() {
    const { journal, addJournalEntry, communityPosts, user } = useAppContext();
    const [entry, setEntry] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        if (!entry.trim()) return;

        const newEntry = {
            date: selectedDate,
            text: entry.trim(),
        };

        const exists = journal.find(e => e.date === selectedDate);

        if (exists) {
            // Update existing entry
            const updated = journal.map(e =>
                e.date === selectedDate ? newEntry : e
            );
            addJournalEntry(updated);
        } else {
            // Add new entry
            addJournalEntry([...journal, newEntry]);
        }

        setEntry('');
        setIsEditing(false);
    };


    const existingEntry = journal.find(e => e.date === selectedDate);

    const userComments = communityPosts
        .flatMap(post => post.comments || [])
        .filter(comment => comment.toLowerCase().includes(user.name.toLowerCase()));

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Daily Journal</h2>

            <label>Select Date:</label>
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={{ marginBottom: '1rem' }}
            />

            <textarea
                rows="5"
                placeholder="Reflect on your day..."
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                style={{ width: '100%', padding: '0.5rem' }}
            />
            <button onClick={handleSave} style={{ marginTop: '0.5rem' }}>{isEditing ? 'Update Entry' : 'Save Entry'}</button>
            <button onClick={handleSave} style={{ marginTop: '0.5rem' }}>{isEditing ? 'Update Entry' : 'Save Entry'}</button>

            {isEditing && (
                <button
                    onClick={() => {
                        setEntry('');
                        setIsEditing(false);
                    }}
                    style={{ marginLeft: '1rem', color: 'red' }}
                >
                    Cancel
                </button>
            )}


            {existingEntry && (
                <div style={{ marginTop: '1rem', backgroundColor: '#f4f4f4', padding: '1rem' }}>
                    <h4>Entry for {selectedDate}:</h4>
                    <p>{existingEntry.text}</p>
                </div>
            )}

            <button
                onClick={() => {
                    setEntry(existingEntry.text);
                    setIsEditing(true);
                }}
                style={{ marginTop: '0.5rem' }}
            >
                Edit Entry
            </button>

            <hr style={{ margin: '2rem 0' }} />
            <h3>Your Community Comments</h3>
            {userComments.length > 0 ? (
                <ul>
                    {userComments.map((comment, i) => (
                        <li key={i}>🗨️ {comment}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments from you yet.</p>
            )}
        </div>
    );
}

export default Journal;
