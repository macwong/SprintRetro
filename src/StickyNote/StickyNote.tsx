import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import './StickyNote.css';
import StickyNoteEdit from './StickyNoteEdit';

class StickyNote extends React.Component {
    public render() {
        return (
            <div>
                <div className="sticky_note">
                    <ReactMarkdown source={"# test\n* test\n* test"} />
                    <StickyNoteEdit />
                </div>
            </div>
        );
    }
}

export default StickyNote;
