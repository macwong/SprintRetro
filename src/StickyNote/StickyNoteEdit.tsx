import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StickyNoteEdit.css';

class StickyNoteEdit extends React.Component {
    public render() {
        return (
            <div className="sticky_note_edit_container">
                <div className="sticky_note_edit">
                    <CodeMirror value={"# test\n* test\n* test"} onChange={undefined} options={{ mode: 'markdown', lineWrapping: true }} />
                </div>
                <div className="sticky_note_toolbar">
                <button className="btn"><FontAwesomeIcon icon={SolidIcons.faSave} /></button>
                <button className="btn"><FontAwesomeIcon icon={SolidIcons.faBan} /></button>
                </div>
            </div>
        );
    }
}

export default StickyNoteEdit;
