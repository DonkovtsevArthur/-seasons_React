import React from "react";

import "./Buttons.css";

const Buttons = props => {
  return <div>
      <button onClick={props.buttons} value="spring">
        Весна{" "}
      </button>
      <button onClick={props.buttons} value="summer">
        Лето{" "}
      </button>
      <button onClick={props.buttons} value="autumn">
        Осень{" "}
      </button>
      <button onClick={props.buttons} value="winter">
        Зима{" "}
      </button>
    </div>;
};
export default Buttons;
