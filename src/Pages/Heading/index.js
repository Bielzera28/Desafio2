import Logo from "./images/Logo.png";
import Button from "../../Components/Button";

import "./styles.css";

function Heading() {
  return (
    <div className="heading-container">
      <img alt="Logo Rachi" src={Logo} />

      <div className="heading-container__left">
        <Button href="/" fontSize={18} fontWeight={500} color="#6E7275">
          Funcionalidades
        </Button>
        <Button href="/" fontSize={18} fontWeight={500} color="#6E7275">
          App
        </Button>
        <Button href="/" fontSize={18} fontWeight={500} color="#6E7275">
          Planos
        </Button>
        <Button href="/" fontSize={18} fontWeight={500} color="#6E7275">
          Contato
        </Button>
      </div>
    </div>
  );
}

export default Heading;
