import React from "react";
import styles from "./styles.css";

const App = props =>
  <div className={styles.special}>
    <h1>
      Hello you to you {props.name}
    </h1>
  </div>;

export default App;
