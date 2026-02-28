/**
 * @component ErrorBoundary
 * @part-of Web3School — Error Handling
 * @design Catches React errors and shows fallback UI
 */
"use client";

import { Component, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex items-center justify-center min-h-[40vh] px-4">
          <div className="text-center space-y-4 max-w-md">
            <AlertTriangle className="w-10 h-10 text-amber-warning mx-auto" />
            <h3 className="text-lg font-heading font-bold text-text-primary">
              Something went wrong
            </h3>
            <p className="text-text-secondary text-sm">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              variant="outline"
              className="border-border text-text-primary rounded-xl"
            >
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
