import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import * as ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import './StickyNote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IStickyNoteState {
    code: string;
    editMode: boolean;
    notes: string;
}

class StickyNote extends React.Component<{}, IStickyNoteState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            code: "## Click to change\n(**Markdown** supported)",
            editMode: false,
            notes: "## Click to change\n(**Markdown** supported)"
        };

        this.editClick = this.editClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.updateCode = this.updateCode.bind(this);
    }

    public render() {
        if (this.state.editMode) {
            return (
                <div className="sticky_note_container">
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
                        <ReactMarkdown source={this.state.notes} />
                    </div>
                    <button className="btn btn_delete"><FontAwesomeIcon icon={SolidIcons.faTrashAlt} /></button>
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
            code: this.state.notes,
            editMode: false
        });
    }

    private saveClick(e: any) {
        this.setState({
            editMode: false,
            notes: this.state.code
        });
    }

    private updateCode(newCode: any) {
        this.setState({
            code: newCode
        });
    }
}

export default StickyNote;
