import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StickyNote from '../StickyNote/StickyNote';

import './StickyBoard.css';

interface IStickyNote {
    id: number;
    note: string;
}

interface IStickyBoardState {
    notes: IStickyNote[]
}

class StickyBoard extends React.Component<{}, IStickyBoardState> {
    private defaultNote = "## Click to change\n(**Markdown** supported)";

    constructor(props: {}) {
        super(props);

        this.state = {
            notes: [
                { id: 1, note: "Test note 1" },
                { id: 2, note: "Test note 2" },
                { id: 3, note: "Test note 3" },
                { id: 4, note: this.defaultNote },
                { id: 5, note: this.defaultNote },
                { id: 6, note: this.defaultNote },
                { id: 7, note: this.defaultNote },
                { id: 8, note: this.defaultNote },
                { id: 9, note: this.defaultNote },
                { id: 10, note: this.defaultNote },
            ]
        };

        this.addStickyNote = this.addStickyNote.bind(this);
        this.deleteStickyNote = this.deleteStickyNote.bind(this);
    }

    public render() {
        return (
            <div className="sticky_board">
                <div className="add_sticky_note_container sticky_note_container" onClick={this.addStickyNote}>
                    <div className="add_sticky_note">
                        <FontAwesomeIcon icon={SolidIcons.faPlus} />
                    </div>
                </div>
                {
                    this.state.notes.map((value, index) => {
                        return <StickyNote key={value.id} index={value.id} initialNote={value.note} deleteEvent={this.deleteStickyNote} />
                    })
                }
            </div>
        );
    }

    public deleteStickyNote(index: number) {
        this.setState({
            notes: this.state.notes.filter((v) => v.id !== index)
        });
    }

    private addStickyNote() {
        const maxID: number = Math.max.apply(Math, this.state.notes.map((o) => o.id + 1));
        const newNote: IStickyNote = {
            id: maxID + 1,
            note: this.defaultNote
        }

        const newArray = this.state.notes.slice();
        newArray.unshift(newNote);

        this.setState({
            notes: newArray
        })
    }
}

export default StickyBoard;
