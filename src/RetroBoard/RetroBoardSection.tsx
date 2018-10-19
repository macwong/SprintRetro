import * as React from 'react';
import './RetroBoardSection.css';

interface IRetroBoardSectionProps {
    className: string;
    title: string;
}

class RetroBoardSection extends React.Component<IRetroBoardSectionProps> {
    public render() {
        return (
            <div className={this.props.className}>
                <h1>{this.props.title}</h1>
                {/* <div>Test</div> */}
            </div>
        );
    }
}

export default RetroBoardSection;
