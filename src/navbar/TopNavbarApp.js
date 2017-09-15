import React from 'react'
import { BrowserRouter as Router,  Route,  Link,  Switch } from 'react-router-dom'
import { translate } from 'react-polyglot';
import HomeApp from '../content/HomeApp';
import ServicosApp from '../content/ServicosApp';
import ProjetosApp from '../content/ProjetosApp';
import ContatoApp from '../content/ContatoApp';
import NoContentApp from '../content/NoContentApp';

const TopNavbarApp = ( {t} ) => (
  <Router>
    <div>
      <ul>

        <li><Link to="/">{t('navbar_home')}</Link></li>
        <li><Link to="/servicos">{t('navbar_services')}</Link></li>
        <li><Link to="/projetos">{t('navbar_projects')}</Link></li>
        <li><Link to="/contato">{t('navbar_contact')}</Link></li>
        <li><Link to="http://www.google.com" target="_blank">{t('navbar_jjpage')}</Link></li>

        <li><button onClick={ changeLanguage('pt') }>PT</button></li>
        <li><button onClick={ changeLanguage('en') }>EN</button></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/servicos" exact component={Servicos}/>
        <Route path="/projetos" exact component={Projetos}/>
        <Route path="/contato" exact component={Contato}/>
        <Route component={NoContent}/>
      </Switch>
    </div>
  </Router>
)

TopNavbarApp.propTypes = {
  t: React.PropTypes.func.isRequired,
};

const Home      = () => ( <HomeApp /> )
const Servicos  = () => ( <ServicosApp /> )
const Projetos  = () => ( <ProjetosApp /> )
const Contato   = () => ( <ContatoApp /> )
const NoContent = () => ( <NoContentApp /> )

export default translate() (TopNavbarApp);
