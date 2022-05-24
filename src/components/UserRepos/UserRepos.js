import React, {useState} from 'react';
import FlipMove from 'react-flip-move';
import Repo from '../Repo/Repo';
import './UserRepos.css';

const UserRepos = ({repos}) => {
    const [sort, setSort] = useState('stars');

    const handleChange = (event) => {
        setSort(event.target.value);
    }

    const sortRepos = (repos) => {
        const sorted = repos.sort((a, b) => {
            if (sort === 'forks') {
                return b.forks_count - a.forks_count;
            }
            else if (sort === 'size') {
                return b.size - a.size;
            }
            return b.stargazers_count - a.stargazers_count;
        });
        return sorted;
    }

    return (
        <div className="UserRepos">
            <div className="header">
                <h2>Top Repositories</h2>
                <select value={sort} onChange={handleChange}>
                    <option value="stars">Stars</option>
                    <option value="forks">Forks</option>
                    <option value="size">Size</option>
                </select>
            </div>
            <hr></hr>
            {repos.length ? 
                <FlipMove typeName="ul" className="repo-list">
                    {sortRepos(repos)
                        .slice(0, 10)
                        .map(repo => (
                        <Repo 
                            key={repo.id} 
                            description={repo.description} 
                            forks_count={repo.forks_count}
                            html_url={repo.html_url} 
                            language={repo.language}
                            name={repo.name}
                            size={repo.size}
                            stargazers_count={repo.stargazers_count}
                        />
                    ))}
            </FlipMove>
            : 
            <p>No repositories available</p>}
        </div>
    );
}

export default UserRepos;