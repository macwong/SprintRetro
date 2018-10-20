import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import './StickyNote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StickyNoteEdit from './StickyNoteEdit';

interface IStickyNoteProps {
    blah: number;
}

interface IStickyNoteState {
    editMode: boolean;
}

class StickyNote extends React.Component<IStickyNoteProps, IStickyNoteState> {
    constructor(props: IStickyNoteProps) {
        super(props);

        this.state = {
            editMode: false
        };

        this.editClick = this.editClick.bind(this);
    }

    public render() {
        if (this.state.editMode) {
            return (
                <div className="sticky_note_container">
                    <StickyNoteEdit />
                </div>
            );
        }
        else {
            return (
                <div className="sticky_note_container">
                    <div className="sticky_note">
                        <ReactMarkdown source={"# test\n* test\n* test"} />
                    </div>
                    <div className="sticky_note_toolbar">
                        <button className="btn" onClick={this.editClick}><FontAwesomeIcon icon={SolidIcons.faEdit} /></button>
                        <button className="btn"><FontAwesomeIcon icon={SolidIcons.faTrashAlt} /></button>
                    </div>
                </div>
            );
        }
    }

    private editClick(e: any) {
        this.setState({
            editMode: true
        });
    }
}

export default StickyNote;
