import {
  AppStyled, HeaderStyled, MainStyled, FooterStyled,
} from 'AppStyled';
import { H3 } from 'theme/Typography';
import Shipments from './pages/Shipments';

function App() {
  return (
    <AppStyled>
      <HeaderStyled>
        <H3>Dronocargo</H3>
      </HeaderStyled>
      <MainStyled>
        <Shipments />
      </MainStyled>
      <FooterStyled>
        <p>Powered by Nuvo Cargo</p>
        <p>Help</p>
      </FooterStyled>
    </AppStyled>
  );
}

export default App;
