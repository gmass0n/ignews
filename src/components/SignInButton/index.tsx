import { FC } from "react";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export const SignInButton: FC = () => {
  const isUserLoggedId = false;

  return isUserLoggedId ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      <span>Gabriel Masson</span>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eda417" />
      <span>Sign in with GitHub</span>
    </button>
  );
};
