import * as React from 'react';
import './RetroBoard.css';
import RetroBoardSection from './RetroBoardSection';

class RetroBoard extends React.Component {
    public render() {
        return (
            <div>
                <RetroBoardSection className="block topleft" title="Liked" />
                <RetroBoardSection className="block topright" title="Lacked" />
                <RetroBoardSection className="block bottomleft" title="Learned" />
                <RetroBoardSection className="block bottomright" title="Questions / Actions" />
            </div>
        );
    }
}

export default RetroBoard;
