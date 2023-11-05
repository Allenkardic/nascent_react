import { useNavigate } from 'react-router-dom';

import { ReactComponent as NotFoundImg } from '../../assets/svg/notFound.svg';
import { Button } from '../../components';
import { PageContainer, H5, H4 } from '../../styles';
import { colors, spacing, routesPath } from '../../utils';

import { Container, ImgContainer } from './style';

const { HOME } = routesPath;

function NotFound() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(HOME);
  };
  return (
    <PageContainer>
      <Container>
        <ImgContainer>
          <NotFoundImg />
        </ImgContainer>
        {/* <H4 fw7 center>
          No page found
        </H4>
        <H5 center fw5 color={colors.grey40} style={{ marginTop: spacing.xxsmall, marginBottom: spacing.mini }}>
          This page could not be found. Go back to the
        </H5>
        <H5 center fw5 color={colors.grey40} style={{ marginBottom: spacing.xsmall }}>
          home page
        </H5> */}
        <Button onClick={onSubmit} text="Go back home" disabled={false} />
      </Container>
    </PageContainer>
  );
}

export default NotFound;
