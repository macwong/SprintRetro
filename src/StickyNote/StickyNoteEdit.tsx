import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import './StickyNoteEdit.css';

class StickyNoteEdit extends React.Component {
    public render() {
        return (
            <div>
                <CodeMirror value={"# test\n* test\n* test"} onChange={undefined} options={{ mode: 'markdown', lineWrapping: true }} />
            </div>
        );
    }
}

export default StickyNoteEdit;
