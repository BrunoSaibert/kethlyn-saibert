import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Title } from "../Typography";
import Burger from "../Burger";

import config from "../../lib/config";

import * as S from "./styles";

function Header({ theme, themeToggler }) {
  const [active, setActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (active) {
      setActive(!active);
    }
  }, [router.asPath]);

  return (
    <S.Container>
      <S.Header className={active ? "active" : ""}>
        <Link href="/">
          <a>
            <Title as="span" size="medium">
              {config.site.title}
            </Title>
          </a>
        </Link>

        <Burger active={active} onClick={() => setActive(!active)} />

        <nav>
          <S.ToggleWrapper>
            🌞
            <S.Toggle onClick={themeToggler} isDark={theme === "light"} />
            🌛
          </S.ToggleWrapper>

          <ul>
            <li>
              <Link href="/">
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
      </S.Header>
    </S.Container>
  );
}

export default Header;
