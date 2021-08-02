import { isEmpty } from "../../../utils";
import { DefaultButton } from "./button.styles";

const Button = ({ btntype = "primary", title = "", icon = null }) => {
  return (
    <DefaultButton btntype={btntype}>
      <span>{title}</span>
      {!isEmpty(icon) ? <img src={icon} alt="btn-icon" /> : null}
    </DefaultButton>
  );
};

export default Button;
