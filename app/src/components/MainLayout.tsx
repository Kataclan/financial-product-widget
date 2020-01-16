import React from 'react';
import { FlexVContainer } from '../components/FlexContainers';
import LoadingSpinner from './LoadingSpinner';

/**
 * Main layout of the widget. It renders a loading spinner if showLoading is true, if not, renders its children
 * Also you can provide a container id and classname for more customization
 */
const MainLayout: React.SFC<{
  containerId: string;
  containerClassName: string;
  showLoading: boolean;
}> = ({ containerId, containerClassName, showLoading, children }) => (
  <FlexVContainer id={containerId} className={containerClassName} full={true}>
    {showLoading ? <LoadingSpinner /> : children}
  </FlexVContainer>
);

export default MainLayout;
