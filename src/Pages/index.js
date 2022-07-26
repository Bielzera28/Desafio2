import Heading from "./Heading"
import Registration from "./Registration";
import Plans from "./Plans";
import Work from "./Work";
import Apps from "./Apps";
import Contate from "./Contate";
import Baseboard from "./Baseboard";

import "./styles.css";


function Home() {
    return (
      <div className="home-container">
        <Heading />
        <Registration />
        <Work />
        <Apps />
        <Plans />
        <Contate />
        <Baseboard />
      </div>
    );
  }
  
  export default Home;