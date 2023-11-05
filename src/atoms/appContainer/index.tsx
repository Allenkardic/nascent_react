import { ReactElement } from 'react';

// import { FiChevronLeft } from 'react-icons/fi';

import { Navbar } from '../../components';
import { ProgressBarIProps } from '../../components/progressBar';
import { PageContainer, PageContent } from '../../styles';
// import { colors } from '../../utils';

export interface IProps {
  children: ReactElement;
  secondaryView?: boolean;
  isFooterVisible?: boolean;
  navHeaderText?: string;
  processFlowData: ProgressBarIProps[];
}

function AppContainer({ children, secondaryView = false, navHeaderText, processFlowData }: IProps) {
  return (
    <>
      <Navbar title={navHeaderText} processFlowData={processFlowData} />

      <div>
        <PageContainer>
          <PageContent secondaryView={secondaryView}>{children}</PageContent>
        </PageContainer>
      </div>
    </>
  );
}

export default AppContainer;
