import { Container, Header, Footer } from "rsuite";
import AppBar from './AppBar';
import AppFooter from './AppFooter/app-footer';
import style from './frame.module.less';
import 'react-toastify/dist/ReactToastify.css';
import { MapProvider } from 'components/WebMap/mapProvider';
import WebMap from 'components/WebMap';

const Frame = () => {

  return (
    <Container className={style.appFrame}>
      <Header>
        <AppBar />
      </Header>
      <Container className={style.appFrameContent}>
        <MapProvider><WebMap /></MapProvider>
      </Container>
      <Footer>
        <AppFooter />
      </Footer>
    </Container>
  );
}

export default Frame;