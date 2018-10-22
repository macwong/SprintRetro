import * as React from 'react';

import { AppContextConsumer } from '../state/AppContext';

import StickyNote from '../StickyNote/StickyNote';

import './StickyBoard.css';

interface IStickyNote {
    id: number;
    note: string;
}

interface IStickyBoardState {
    isAdding: boolean;
    notes: IStickyNote[];
}

class StickyBoard extends React.Component<{}, IStickyBoardState> {
    private defaultNote = "## Click to change\n(**Markdown** supported)";

    constructor(props: {}) {
        super(props);

        this.state = {
            isAdding: false,
            notes: []
        };

        this.addMode = this.addMode.bind(this);
        this.addStickyNote = this.addStickyNote.bind(this);
        this.deleteStickyNote = this.deleteStickyNote.bind(this);
    }

    public render() {
        return (
            <div className="sticky_board">
                <StickyNote isAdding={true} index={-1} initialNote={this.defaultNote} deleteEvent={this.deleteStickyNote} overlayState={undefined} addNewEvent={this.addStickyNote} />
                {
                    this.state.notes.map((value, index) => {
                        return <StickyNote key={value.id} index={value.id} initialNote={value.note} deleteEvent={this.deleteStickyNote} overlayState={undefined} />
                    })
                }
                <AppContextConsumer>
                    {({ showOverlay }) => (
                        <div className="overlay" style={{ display: showOverlay ? "block" : "none" }} />
                    )}
                </AppContextConsumer>
            </div>
        );
    }

    public deleteStickyNote(index: number) {
        this.setState({
            notes: this.state.notes.filter((v) => v.id !== index)
        });
    }

    private addMode() {
        this.setState({
            isAdding: true
        });
    }

    private addStickyNote(note: string) {
        let maxID = 0;

        if (this.state.notes.length > 0) {
            maxID = Math.max.apply(Math, this.state.notes.map((o) => o.id + 1));
        }

        const newNote: IStickyNote = {
            id: maxID + 1,
            note
        }

        const newArray = this.state.notes.slice();
        newArray.unshift(newNote);

        this.setState({
            isAdding: false,
            notes: newArray
        })
    }
}

export default StickyBoard;
