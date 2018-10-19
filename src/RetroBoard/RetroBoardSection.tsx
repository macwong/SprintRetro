import * as React from 'react';
import './RetroBoardSection.css';

interface IRetroBoardSectionProps {
    className: string;
}

class RetroBoardSection extends React.Component<IRetroBoardSectionProps> {
    public render() {
        return (
            <div className={this.props.className}>
                TEST
            </div>
        );
    }
}

export default RetroBoardSection;
