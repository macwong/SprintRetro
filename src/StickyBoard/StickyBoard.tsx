import * as React from 'react';

import StickyNote from '../StickyNote/StickyNote';

import './StickyBoard.css';

interface IStickyNote {
    note: string;
}

interface IStickyBoardState {
    notes: IStickyNote[]
}

class StickyBoard extends React.Component<{}, IStickyBoardState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            notes: [
                { note: "Test note 1" },
                { note: "Test note 2" },
                { note: "Test note 3" },
                { note: "## Click to change\n(**Markdown** supported)" },
                { note: "## Click to change\n(**Markdown** supported)" },
                { note: "## Click to change\n(**Markdown** supported)" },
                { note: "## Click to change\n(**Markdown** supported)" },
                { note: "## Click to change\n(**Markdown** supported)" },
                { note: "## Click to change\n(**Markdown** supported)" },
                { note: "## Click to change\n(**Markdown** supported)" },
            ]
        }
    }
    
    public render() {
        return (
            <div className="sticky_board">
                {
                    this.state.notes.map((value, index) => {
                        return <StickyNote key={index} initialNote={value.note} />
                    })
                }
            </div>
        );
    }
}

export default StickyBoard;
