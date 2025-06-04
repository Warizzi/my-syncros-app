import React from 'react';
import './Profile.css';


const Profile = () => {
    return (
        <div className="profile">
            <section className="hero">
                <h1>About Me</h1>
                <img src="../Assets/Profile photo.jpg" alt="Warona Louw" className="profile-image" />
                <p className="bio">
                    Hello, I am Warona Louw. I'm a web developer passionate about creating user-friendly and accessible applications.
                    This fitness tracker app is a reflection of my learning in React, UI design, and frontend architecture.
                </p>
            </section>

            <section className="reflection">
                <h2>Project Reflection</h2>
                <div className="reflection-block">
                    
                    <p>I have made significant updates to my final website based on the feedback from assignment 2.
                        Initially there we meant to be 5 pages titled Mood, Home, Meals, Workouts and Journal.
                        During development I decided to scrap the mood page and instead replaced it with a community page,
                        with the thinking that a community page would be more engaging for the user seeing that it is meant to be an app where you can seek encouragemnt from other users.
                        Apart from that, the rest of the features in my app remained the same. For the majority of this project my main focus has been on functionality, getting things to work.
                        An example of this would be features such as the calorie and workout tracker where users can enter their meals and workout types for the day and then can view them in the progress page.
                        The progress page is also a new addition, made as a place to store all the recorded values of the user, where they can be viewed anytime.
                        Usability has also been a priority, with each page relating to each other for the convenience of the user.</p>

                    <p>While developing this website, I made a conscious effort to incorporate elements from my style bible to ensure visual consistency and thematic cohesion.
                        I applied my chosen color palette — including navy blue, lime green, and baby blue — across pages to evoke a sense of calm and focus aligned with wellness themes.
                        Typography choices were kept clean and modern to reflect simplicity and accessibility. The layout design followed a modular approach inspired by my wireframes, emphasizing usability and intuitive navigation.
                        These stylistic decisions helped shape a coherent identity for the app, tying functionality to aesthetic purpose.</p>
                </div>

            </section>
        </div>
    );
};

export default Profile;
