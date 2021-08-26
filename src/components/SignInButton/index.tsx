import { FC } from "react";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export const SignInButton: FC = () => {
  const isUserLoggedId = false;

  return isUserLoggedId ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Gabriel Masson
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eda417" />
      Sign in with GitHub
    </button>
  );
};
