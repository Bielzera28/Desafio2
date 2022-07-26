import Text from "../../Components/Text";
import Security from "./icons/security";
import Add from "./icons/add";
import Face from "./icons/face";

import "./styles.css";

function Work() {
  return (
    <div className="work-container">
      <div id="Funcionalidades" className="work-container__heading">
        <Text fontSize={40} fontWeight={700} color="#293145">
          Como funciona
        </Text>
      </div>

      <div className="work-container__icons">
        <div className="work-icons">
          <Add />
          <Text fontSize={18} fontWeight={700} color="#293145">Crie conexões</Text>
          <Text fontSize={16} color="#6E7275">Lorem ipsum dolor sit amet,<br /> consecteteu.</Text>
        </div>

        <div className="work-icons">
          <Security />
          <Text fontSize={18} fontWeight={700} color="#293145">100% gratuito</Text>
          <Text fontSize={16} color="#6E7275">Lorem ipsum dolor sit amet,<br /> consecteteu.</Text>
        </div>

        <div className="work-icons">
          <Face />
          <Text fontSize={18} fontWeight={700} color="#293145">Compartilhamento</Text>
          <Text fontSize={16} color="#6E7275">Lorem ipsum dolor sit amet,<br /> consecteteu.</Text>
        </div>
      </div>
    </div>
  );
}

export default Work;
