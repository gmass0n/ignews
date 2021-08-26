import { NextPage } from "next";

import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <h1 className={styles.title}>
      Home <span>azul</span>
    </h1>
  );
};

export default Home;
