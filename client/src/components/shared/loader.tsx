import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress'

interface loadingWrapperProps {
    loading: boolean;
  }
/**
 * An loader HOC, to display a loading spinner untill parent component says
 * @param Component render Component as soon as loading is Done
 */
const loadingWrapper = <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & loadingWrapperProps> => ({
    loading,
    ...props
  }: loadingWrapperProps) =>
    loading ? <CircularProgress data-testid={`loader-section`} /> : <Component {...props as P} />;

export default loadingWrapper    