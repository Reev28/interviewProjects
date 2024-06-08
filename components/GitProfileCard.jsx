import Image from 'next/image'
import React from 'react'

const GitProfileCard = ({ profileData }) => {
    return (
        <div className='GitProfileCard'>
            <div className='git-photo'><Image src={profileData.avatar_url} alt='Git Profile Photo' width={100} height={100} /></div>
            <div className='git-url'><a href={profileData.html_url}>{profileData.name}</a></div>
            <div className='git-pub-repos'><p>Public Repos: {profileData.public_repos}</p></div>
            <div className='git-followers'><p>Followers: {profileData.followers}</p></div>
            <div className='git-following'><p>Following: {profileData.following}</p></div>
        </div>
    )
}

export default GitProfileCard