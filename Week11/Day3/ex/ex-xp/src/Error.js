import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
        };
    }

    componentDidCatch(error, errInfo) {
        console.log('catch!');
        this.setState({ error: error });
    }

    render() {
        if (this.state.error) {
            return (
                <>
                <details style={{ whiteSpace: "pre-wrap" }}>
                    {this.state.error && this.state.error.toString()}
                    {this.state.error.componentStack}
                </details>
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
