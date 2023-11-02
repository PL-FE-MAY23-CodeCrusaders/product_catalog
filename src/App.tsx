import {
  NavLink, Route, Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';

function Home() {
  return <div>Home Page Content</div>;
}

function Phones() {
  return <div>Phones Page Content</div>;
}

function Tablets() {
  return <div>Tablets Page Content</div>;
}

function Accessories() {
  return <div>Accessories Page Content</div>;
}

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>

    </>
  );
}

export default App;
