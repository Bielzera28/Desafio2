import Heading from "./Heading"
import Registration from "./Registration";
import Plans from "./Plans";

import "./styles.css";

function Home() {
    return (
      <div className="home-container">
        <Heading />
        <Registration />
        <div>Work</div>
        <div>App</div>
        <Plans />
        <div>Contate</div>
      </div>
    );
  }
  
  export default Home;