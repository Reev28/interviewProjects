'use client'
import React, { useState } from 'react'
import GitProfileCard from './GitProfileCard';
const url = 'https://api.github.com/users/'
const GithubProfileFinder = () => {
    const [userName, setUserName] = useState('');
    const [profile, setProfile] = useState({});

    const fetchProfile = async () => {
        if (userName.length < 1) {
            console.log('empty');
            return
        }
        try {
            const result = await fetch(`${url}${userName}`);
            const data = await result.json();
            console.log(data);
            if (data.id) {
                setProfile(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (e) => {
        console.log(e);
        if (e.type += "keydown") {
            if (e.key == "Enter") {
                fetchProfile();
                setUserName('');
            } else {
                return;
            }
        };
        console.log(userName);
        fetchProfile();
        setUserName('');

    }



    return (
        <section className='GithubProfileFinder'>
            <div className='gitSearchOption'>
                <input type='text' value={userName} onChange={(e) => setUserName(e.target.value.trim())} onKeyDown={(e) => { handleSearch(e) }}></input>
                <button onClick={(e) => handleSearch(e)} >Search</button>
            </div>
            {profile.id ? <GitProfileCard profileData={profile} /> : <div></div>}
        </section>
    )
}

export default GithubProfileFinder