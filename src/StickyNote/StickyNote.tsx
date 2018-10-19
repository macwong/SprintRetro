import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import './StickyNote.css';

class StickyNote extends React.Component {
    public render() {
        return (
            <div className="sticky_note">
                <ReactMarkdown source={"# test\n* test\n* test"} />
            </div>
        );
    }
}

export default StickyNote;
