import { FC } from "react";
import Link from "next/link";

import classNames from "classnames";

import styles from "./styles.module.scss";
import { useRouter } from "next/dist/client/router";

interface NavLinkProps {
  href: string;
}

export const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a className={classNames(styles.navLink, { [styles.active]: isActive })}>
        {children}
      </a>
    </Link>
  );
};
