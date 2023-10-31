import {
  NavLink, Route, Routes,
} from 'react-router-dom';
import { Home } from './Components/PageHome/PageHome';
import { Phones } from './Components/PagePhones/PagePhones';
import { Tablets } from './Components/PageTablets/PageTablets';
import { Accessories } from './Components/PageAccesories/PageAccessories';
import { Favourites } from './Components/Favourites/Favourites';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/phones">PHONES</NavLink>
            </li>
            <li>
              <NavLink to="/tablets">TABLETS</NavLink>
            </li>
            <li>
              <NavLink to="/accessories">ACCESSORIES</NavLink>
            </li>
            <li>
              <NavLink to="/favourites">FAVOURITES</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/favourites" element={<Favourites />} />

      </Routes>

    </>
  );
}

export default App;
