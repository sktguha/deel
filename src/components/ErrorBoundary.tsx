import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    render() {
      if ((this.state as {hasError: boolean}).hasError) {
        return <h2>Something went wrong in Autocomplete component. please try again</h2>;
      }
  
      return (this.props as {children: any}).children; 
    }
  }