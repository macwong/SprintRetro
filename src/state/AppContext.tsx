
import * as React from 'react';

const AppContext = React.createContext({
    showOverlay: false
});

interface IAppContextProviderState {
    showOverlay: boolean;
}

export class AppContextProvider extends React.Component<{}, IAppContextProviderState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            showOverlay: false
        };
    }

    public render() {
        const { children } = this.props;

        return (
            <AppContext.Provider
                value={{
                    showOverlay: this.state.showOverlay
                }}
            >
                {children}
                <div style={{ display: this.state.showOverlay ? "block" : "none" }}>sdjfl adshlfdshlkfh daslf hdsklf hdslf hdslf hdaslf </div>
            </AppContext.Provider>
        );
    }

    public toggleOverlay(show: boolean) {
        this.setState({
            showOverlay: show
        });
    }
}

export const AppContextConsumer = AppContext.Consumer;