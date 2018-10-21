import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import * as ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import './StickyNote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IStickyNoteProps {
    initialNote: string;
    index: number;
    deleteEvent: (index: number) => void;
}

interface IStickyNoteState {
    code: string;
    editMode: boolean;
    note: string;
}

class StickyNote extends React.Component<IStickyNoteProps, IStickyNoteState> {
    constructor(props: IStickyNoteProps) {
        super(props);

        this.state = {
            code: this.props.initialNote,
            editMode: false,
            note: this.props.initialNote
        };

        this.editClick = this.editClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.updateCode = this.updateCode.bind(this);
    }

    public render() {
        if (this.state.editMode) {
            return (
                <div className="sticky_note_container edit_mode">
                    <div className="sticky_note_edit_container">
                        <div className="sticky_note_edit">
                            <CodeMirror value={this.state.code} onChange={this.updateCode} options={{ mode: 'markdown', lineWrapping: true }} />
                        </div>
                        <div className="sticky_note_toolbar">
                            <button className="btn" onClick={this.saveClick}><FontAwesomeIcon icon={SolidIcons.faSave} /></button>
                            <button className="btn" onClick={this.cancelClick}><FontAwesomeIcon icon={SolidIcons.faBan} /></button>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="sticky_note_container">
                    <div className="sticky_note" onClick={this.editClick}>
                        <ReactMarkdown source={this.state.note} />
                    </div>
                    <button className="btn btn_delete" onClick={this.deleteClick.bind(this, this.props.index)}><FontAwesomeIcon icon={SolidIcons.faTrashAlt} /></button>
                </div>
            );
        }
    }

    private deleteClick(index: number) {
        this.props.deleteEvent(index);
    }

    private editClick(e: any) {
        this.setState({
            editMode: true
        });
    }

    private cancelClick(e: any) {
        this.setState({
            code: this.state.note,
            editMode: false
        });
    }

    private saveClick(e: any) {
        this.setState({
            editMode: false,
            note: this.state.code
        });
    }

    private updateCode(newCode: any) {
        this.setState({
            code: newCode
        });
    }
}

export default StickyNote;
