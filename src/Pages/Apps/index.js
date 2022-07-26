import Text from "../../Components/Text";
import GooglePlay from "./icons/googlepay";
import AppStore from "./icons/appstore";
import Notification from "./images/new-notifications.png";

import "./styles.css";

function Apps() {
    return (
      <div className="apps-container">
        <div id="App" className="apps-container__content">
          <Text fontSize={32} fontWeight={700} color="#293145">Baixe nosso app para desfrutar mais!</Text>
          <Text fontSize={16} color="#6E7275">Amet in elementum nulla scelerisque dui, egestas at. Elit<br /> consectetur turpis elementum amet vitae et etiam nec.<br /> Varius volutpat hac adipiscing tincidunt pretium.</Text>
          <div className="apps-container__icon">
            <GooglePlay />
            <AppStore />
          </div>
        </div>

        <div>
          <img alt="New notifications" src={Notification} />
        </div>
      </div>
    );
  }
  
  export default Apps;