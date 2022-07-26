import Text from "../../Components/Text";
import Button from "../../Components/Button";
import RegImage from "./images/registration-image.png";

import "./styles.css";

function Registration() {
  return (
    <div className="registration-container">
      <div className="registration-container__text">
        <div>
          <Text fontSize={48} fontWeight={700} color="#293145">
            Rachi,<br/>
            é tudo que você <br/>
            precisa em um só lugar.
          </Text>
        </div>

        <Button
          fontSize={20}
          fontWeight={600}
          backgroundColor="#0F9AFE"
          color="#FFFFFF"
          borderRadius={50}
          padding="16px 36px"
          href="/"
        >
          Cadastrar-se
        </Button>
      </div>

      <img alt="Registration Boy" src={RegImage} />
    </div>
  );
}

export default Registration;
