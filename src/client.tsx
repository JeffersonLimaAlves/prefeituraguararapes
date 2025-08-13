import { CustomProvider } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR';
import ReactDOM from 'react-dom/client';
import Frame from 'components/App/Frame';
import './numbroConfig';
import 'theme-less/main.less';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <CustomProvider locale={ptBR} >
    <Frame />    
  </CustomProvider>
);
