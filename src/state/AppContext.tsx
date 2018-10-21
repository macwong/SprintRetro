
import * as React from 'react';

const AppContext = React.createContext({
    showOverlay: false,
    triggerShowOverlay: (show: boolean) => { return; }
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
                    showOverlay: this.state.showOverlay,
                    triggerShowOverlay: (show) => {
                        this.setState({
                            showOverlay: show
                        })
                    }
                }}
            >
                {children}
            </AppContext.Provider>
        );
    }
}

export const AppContextConsumer = AppContext.Consumer;