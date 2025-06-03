import React, { useState } from "react";
import { useAppContext } from "../Context/AppContext";

function Community() {
    const {
        user,
        communityPosts,
        addCommunityPost,
        likePost,
        addComment
    } = useAppContext();

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [commentInputs, setCommentInputs] = useState({});

    const handlePost = (e) => {
        e.preventDefault();

        if (!message.trim()) {
            setError('Message cannot be empty');
            return;
        }

        const newPost = {
            id: Date.now(),
            user: user.name,
            message,
            date: new Date().toISOString().split('T')[0],
            likes: 0,
            comments: []  // Ensure this is initialized
        };

        addCommunityPost(newPost);
        setMessage('');
        setError('');
    };

    const handleAddComment = (postId) => {
        const text = commentInputs[postId]?.trim();
        if (!text) return;

        addComment(postId, text);
        setCommentInputs({ ...commentInputs, [postId]: '' });
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Syncros Community</h2>

            <form onSubmit={handlePost} style={{ marginBottom: '1rem' }}>
                <textarea
                    rows="4"
                    placeholder="Share your progress, tips, or motivation..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem' }}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" style={{ marginTop: '0.5rem' }}>
                    Post
                </button>
            </form>

            <div>
                <h3>Community Feed</h3>
                {communityPosts.length === 0 ? (
                    <p>No posts yet. Be the first to share something!</p>
                ) : (
                    communityPosts
                        .slice()
                        .reverse()
                        .map((post) => (
                            <div
                                key={post.id}
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    padding: '1rem',
                                    marginBottom: '1rem',
                                }}
                            >
                                <strong>{post.user}</strong> <small>{post.date}</small>
                                <p>{post.message}</p>
                                <button onClick={() => likePost(post.id)}>❤️ {post.likes}</button>

                                {/* Comments Section */}
                                <div style={{ marginTop: '1rem' }}>
                                    <h4>Comments</h4>
                                    {post.comments?.length > 0 ? (
                                        <ul style={{ paddingLeft: '1rem' }}>
                                            {post.comments.map((comment, index) => (
                                                <li key={index}>🗨️ {comment}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No comments yet.</p>
                                    )}
                                    <input
                                        type="text"
                                        value={commentInputs[post.id] || ""}
                                        onChange={(e) =>
                                            setCommentInputs({
                                                ...commentInputs,
                                                [post.id]: e.target.value
                                            })
                                        }
                                        placeholder="Write a comment..."
                                        style={{ width: '80%', marginTop: '0.5rem', padding: '0.25rem' }}
                                    />
                                    <button
                                        onClick={() => handleAddComment(post.id)}
                                        style={{ marginLeft: '0.5rem' }}
                                    >
                                        Comment
                                    </button>
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    );
}

export default Community;
