import * as React from 'react';
import './RetroBoard.css';
import RetroBoardSection from './RetroBoardSection';

class RetroBoard extends React.Component {
    public render() {
        return (
            <div>
                <RetroBoardSection className="block_topleft" />
                <RetroBoardSection className="block_topright" />
                <RetroBoardSection className="block_bottomleft" />
                <RetroBoardSection className="block_bottomright" />
            </div>
        );
    }
}

export default RetroBoard;
