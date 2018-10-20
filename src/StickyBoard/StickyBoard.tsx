import * as React from 'react';

import StickyNote from '../StickyNote/StickyNote';

import './StickyBoard.css';

class StickyBoard extends React.Component {
    public render() {
        return (
            <div className="sticky_board">
                <StickyNote blah={1} />
                <StickyNote blah={1} />
                <StickyNote blah={1} />
                <StickyNote blah={1} />
            </div>
        );
    }
}

export default StickyBoard;
