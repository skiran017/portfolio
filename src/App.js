import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        {/* <div className="lines">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div> */}
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line1,
    .line2,
    .line3,
    .line4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
