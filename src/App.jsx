
import './App.css';

import Feed from './pages/Feed';
import Navbar from './component/Navbar';
import Recipe from './pages/Recipe';

import BrusselsSprouts from './pages/BrusselsSprouts';
import AppleCider from './pages/AppleCider.jsx';
import Eggnog from './pages/Eggnog';
import ChocolateFudge from './pages/ChocolateFudge';


import RoastTurkey from './pages/RoastTurkey';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import SugarCookies from './pages/SugarCookies';
import CranberryJuice from './pages/CranberryJuice';
import About from './pages/About';

import ChristmasMovies from './pages/Movie';
import DarkMode from './pages/DarkMode';
import MashedPotatoes from './pages/MashedPotatoes';
import RedVelvetCake from './pages/RedVelvetCake';
import ChestnutStuffing from './pages/ChestnutStuffing.jsx';
import ButteredRosemaryRolls from './pages/ButteredRosemaryRolls';
import CandiedPecans from './pages/CandiedPecans';
import ChristmasPunch from './pages/ChristmasPunch';
import CranberrySauce from './pages/CranberrySauce';
import GingerbreadCookies from './pages/GingerbreadCookies';
import PeppermintBark from './pages/PeppermintBark';
import PeppermintCheesecake from './pages/PeppermintCheesecake';
import PumpkinPie from './pages/PumpkinPie';

function App() {
  return (
    <>
    
     <BrowserRouter>
      <Navbar/>
      <DarkMode/>
        <Routes>
         <Route path="/" Component={Feed}/>
         <Route path="/recipes" Component={Recipe}/>
         <Route path="/movies" Component={ChristmasMovies}/>
         <Route path='/recipe/SugarCookies' Component={SugarCookies}/>
         <Route path='/recipe/CranberryJuice' Component={CranberryJuice}/>
         <Route path="/recipe/BrusselSprouts" Component={BrusselsSprouts}/>
         <Route path="/recipe/AppleCider" Component={AppleCider}/>
         <Route path="/recipe/Eggnog" Component={Eggnog}/>
         <Route path="/recipe/ChocolateFudge" Component={ChocolateFudge}/>
         <Route path="/recipe/ChestnutStuffing" Component={ChestnutStuffing}/>
         <Route path="/recipe/MashedPotatoes" Component={MashedPotatoes}/>
         <Route path="/recipe/RedVelvetCake" Component={RedVelvetCake}/>
         <Route path="/recipe/RoastTurkey" Component={RoastTurkey}/>
         <Route path="/recipe/ButteredRosemaryRolls" Component={ButteredRosemaryRolls} />
<Route path="/recipe/CandiedPecans" Component={CandiedPecans} />
<Route path="/recipe/ChristmasPunch" Component={ChristmasPunch} />
<Route path="/recipe/CranberrySauce" Component={CranberrySauce} />
<Route path="/recipe/GingerbreadCookies" Component={GingerbreadCookies} />
<Route path="/recipe/PeppermintBark" Component={PeppermintBark} />
<Route path="/recipe/PeppermintCheesecake" Component={PeppermintCheesecake} />
<Route path="/recipe/PumpkinPie" Component={PumpkinPie} />


         <Route path='/About' Component={About}/>
         </Routes>    
      </BrowserRouter>

    

    </>
  );
}

export default App;
