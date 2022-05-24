import React from 'react';
import LanguageChart from './LanguageChart';
import StarredChart from './StarredChart';
import './Charts.css';

const Charts = ({repos}) => {
    return (
        <div className="Charts">
            <LanguageChart repos={repos} />
            <StarredChart repos={repos} />
        </div>
    );
}

export default Charts;