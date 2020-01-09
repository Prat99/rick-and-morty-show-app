import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {
    console.error('some erorr has happened!!');
  }

  render() {
      return (
          <>
            {this.state.hasError ? (<p>Some error has occured</p>) : this.props.children};
          </>
      )
  }
}

export default ErrorBoundary;
