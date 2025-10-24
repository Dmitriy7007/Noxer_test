import { Component, type ErrorInfo, type ReactNode } from 'react';
import './error-boundary.module.css';

type ErrorBoundaryProps = {
  fallback?: ReactNode;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Caught by ErrorBoundary:', error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className='error-boundary'>
          <h2>Что-то пошло не так 😞</h2>
          <p>Пожалуйста, перезагрузите страницу или попробуйте позже.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
