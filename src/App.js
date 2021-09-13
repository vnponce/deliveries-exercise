import {
  AppStyled, MainStyled, FooterStyled,
} from 'AppStyled';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import Shipments from './pages/Shipments';
import Header from './components/Header';
import Shipment from './pages/Shipment';

function App() {
  return (
    <Router>
      <AppStyled>
        <Header />
        <MainStyled>
          <Switch>
            <Route path="/shipment/:shipmentId">
              <Shipment />
            </Route>
            <Route path="/shipments">
              <Shipments />
            </Route>
            {/* <Route path="/users"> */}
            {/*  <Users /> */}
            {/* </Route> */}
            {/* <Route path="/"> */}
            {/*  <Home /> */}
            {/* </Route> */}
          </Switch>
        </MainStyled>
        <FooterStyled>
          <p>Powered by Nuvo Cargo</p>
          <p>Help</p>
        </FooterStyled>
      </AppStyled>
    </Router>
  );
}

export default App;
