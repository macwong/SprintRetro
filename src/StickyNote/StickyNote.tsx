import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import * as ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import './StickyNote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        this.cancelClick = this.cancelClick.bind(this);
    }

    public render() {
        if (this.state.editMode) {
            return (
                <div className="sticky_note_container">
                    <div className="sticky_note_edit_container">
                        <div className="sticky_note_edit">
                            <CodeMirror value={"# test\n* test\n* test"} onChange={undefined} options={{ mode: 'markdown', lineWrapping: true }} />
                        </div>
                        <div className="sticky_note_toolbar">
                            <button className="btn"><FontAwesomeIcon icon={SolidIcons.faSave} /></button>
                            <button className="btn" onClick={this.cancelClick}><FontAwesomeIcon icon={SolidIcons.faBan} /></button>
                        </div>
                    </div>
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
    
    private cancelClick(e: any) {
        this.setState({
            editMode: false
        });
    }
}

export default StickyNote;
