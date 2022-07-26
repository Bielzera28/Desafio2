import Text from "../../Components/Text";
import Button from "../../Components/Button";

import "./styles.css";

function Contate() {
  return (
    <div className="contate-container">
      <div id="Contato" className="contate-container__top">
        <Text fontSize={40} fontWeight={600} color="#FFFFFF">
          Contato
        </Text>
        <Text fontSize={18} color="#DBDBDB">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Donec lacinia mi quis euismod ultrices.
        </Text>
      </div>

      <div className="contate-container__bottom">
        <div className="contate-text">
          <Text fontSize={18} color="#FFFFFF">
            Seu melhor e-mail
          </Text>
        </div>
        <Button href="/" fontSize={18} color="#FFFFFF" backgroundColor="#0F9AFE" borderRadius={50} padding="8px 32px">
          Enviar
        </Button>
      </div>
    </div>
  );
}

export default Contate;
