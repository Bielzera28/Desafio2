import Text from "../../Components/Text";
import Button from "../../Components/Button";

import "./styles.css";

function Card() {
  return (
    <div className="card-container">
      <div className="card-type1">
        <Text> Bronze</Text>
        <div className="card-value">
          <Text fontSize={20} padding="53px 0px">
            R$
          </Text>
          <Text fontSize={50} padding="40px 0px">
            28
          </Text>
          <Text fontSize={26} padding="63px 0px">
            /mês
          </Text>
        </div>
        <Text fontSize={18} color="#6E7275" fontWeight={400}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Donec
          <br /> lacinia mi quis euismod ultrices.
        </Text>
        <div className="card-sign">
          <Button
            href="https://bielzera28.github.io/Desafio2"
            fontSize={20}
            fontWeight={600}
            color="#FFFFFF"
            backgroundColor="#0f9afe"
            borderRadius={50}
            padding="8px 100px"
          >
            Assinar
          </Button>
        </div>
      </div>

      <div className="card-type2">
        <Text fontSize={32} padding="10px">
          Prata
        </Text>
        <div className="omg">
          <div className="card-preferido">
            <Text fontSize={14} fontWeight={600}>
              P R E F E R I D O
            </Text>
          </div>
        </div>
        <div className="card-value">
          <Text fontSize={20} padding="18px 0px 48px">
            R$
          </Text>
          <Text fontSize={50} padding="5px 0px 35px">
            57
          </Text>
          <Text fontSize={26} padding="28px 0px 58px">
            /mês
          </Text>
        </div>
        <Text fontSize={18} color="#DBDBDB" fontWeight={400}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Donec
          <br /> lacinia mi quis euismod ultrices.
        </Text>
        <div className="card-sign">
          <Button
            href="https://bielzera28.github.io/Desafio2"
            fontSize={20}
            fontWeight={600}
            color="#FFFFFF"
            backgroundColor="#0f9afe"
            borderRadius={50}
            padding="6px 100px"
          >
            Assinar
          </Button>
        </div>
      </div>

      <div className="card-type1">
        <Text> Ouro</Text>
        <div className="card-value">
          <Text fontSize={20} padding="53px 0px">
            R$
          </Text>
          <Text fontSize={50} padding="40px 0px">
            94
          </Text>
          <Text fontSize={26} padding="63px 0px">
            /mês
          </Text>
        </div>
        <Text fontSize={18} color="#6E7275" fontWeight={400}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Donec
          <br /> lacinia mi quis euismod ultrices.
        </Text>
        <div className="card-sign">
          <Button
            href="https://bielzera28.github.io/Desafio2"
            fontSize={20}
            fontWeight={600}
            color="#FFFFFF"
            backgroundColor="#0f9afe"
            borderRadius={50}
            padding="8px 100px"
          >
            Assinar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
