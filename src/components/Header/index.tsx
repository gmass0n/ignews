import { FC } from "react";
import Image from "next/image";

import { SignInButton } from "../SignInButton";
import { NavLink } from "../NavLink";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="ig.news"
          height={50}
          width={110}
          objectFit="contain"
          quality={1}
        />

        <nav>
          <NavLink href="/">Home</NavLink>

          <NavLink href="/posts">Posts</NavLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};
