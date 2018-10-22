import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import * as ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import './StickyNote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContextConsumer } from '../state/AppContext';

interface IStickyNoteProps {
    addNewEvent?: (note: string) => void;
    isAdding?: boolean;
    initialNote: string;
    index: number;
    deleteEvent: (index: number) => void;
    overlayState?: {
        showOverlay: boolean;
        triggerShowOverlay: (show: boolean) => void;
    };
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
        let css = "sticky_note_container";

        if (this.state.editMode) {
            return (
                <div className={"sticky_note_container edit_mode"}>
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
        else if (this.props.isAdding) {
            css += this.props.isAdding ? " add_sticky_note_container" : "";

            return (
                <div className={css}>
                    <div className="sticky_note" onClick={this.editClick}>
                        <FontAwesomeIcon icon={SolidIcons.faPlus} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={css}>
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

    private showHideOverlay(show: boolean) {
        if (this.props.overlayState !== undefined) {
            this.props.overlayState.triggerShowOverlay(show);
        }
    }

    private editClick(e: any) {
        if (this.props.isAdding) {
            this.setState({
                code: "## Click to change\n(**Markdown** supported)"
            });
        }

        this.setState({
            editMode: true
        });

        this.showHideOverlay(true);
    }

    private cancelClick(e: any) {
        this.setState({
            code: this.state.note,
            editMode: false
        });

        this.showHideOverlay(false);
    }

    private saveClick(e: any) {
        if (this.props.isAdding === true) {
            if (this.props.addNewEvent) {
                this.props.addNewEvent(this.state.code);
            }

            this.setState({
                editMode: false,
            });
        }
        else {
            this.setState({
                editMode: false,
                note: this.state.code
            });
        }

        this.showHideOverlay(false);
    }

    private updateCode(newCode: any) {
        this.setState({
            code: newCode
        });
    }
}

export default React.forwardRef((props: IStickyNoteProps, ref: string) => (
    <AppContextConsumer>
        {consumer => <StickyNote {...props} overlayState={consumer} ref={ref} />}
    </AppContextConsumer>
));