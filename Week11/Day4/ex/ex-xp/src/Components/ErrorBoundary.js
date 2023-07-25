import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err, errInfo) {
    console.log("err=>", err);
    console.log("errInfo=>", errInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Opps....</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
