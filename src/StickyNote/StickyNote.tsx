import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import * as ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import './StickyNote.css';

class StickyNote extends React.Component {
    public render() {
        return (
            <div>
                <div className="sticky_note">
                    <ReactMarkdown source={"# test\n* test\n* test"} />
                </div>
                <div>
                    <CodeMirror value={"# test\n* test\n* test"} onChange={undefined} options={{ mode: 'markdown', lineNumbers: true }} />
                </div>
            </div>
        );
    }
}

export default StickyNote;
