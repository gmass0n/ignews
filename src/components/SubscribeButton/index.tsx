import { FC } from "react";

import styles from "./styles.module.scss";

export const SubscribeButton: FC = () => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
};
