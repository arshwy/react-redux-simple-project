
import './App.css';
import Header from './containers/Header.js'
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import ProductListing from './containers/ProductListing.js'
import ProductDetail from './containers/ProductDetail.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={ <ProductListing /> } />
          <Route path="/product/:pid" exact element={ <ProductDetail /> } />
          <Route> 404 Not Found! </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
