import Header from './Components/Header.jsx'
import Footer from './Components/Footer'
import {Container} from 'react-bootstrap'
import Home from './Screens/HomeScreen.jsx'
import ProductScreen from './Screens/ProductScreen.jsx'

import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
    <Container>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/product/:id" component={ProductScreen} />
    </Switch>
    </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
