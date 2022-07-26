import Card from "../Card";
import Text from "../../Components/Text";

import "./styles.css";

function Plans() {
  return (
    <div id="Planos" className="plans-container">
      <div className="plans-container__content">
        <Text fontSize={40} fontWeight={700} color="#293145">
          Nossos Planos
        </Text>
        <Text fontSize={18} color="#6E7275">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          <br /> lacinia mi quis euismod ultrices.
        </Text>
      </div>

      <Card />
    </div>
  );
}

export default Plans;
