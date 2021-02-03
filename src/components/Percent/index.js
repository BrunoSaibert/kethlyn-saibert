import React from "react";
import { useViewportScroll, useTransform } from "framer-motion";

import * as S from "./styles";

function Percent() {
  const { scrollYProgress } = useViewportScroll();

  const leftSideWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <S.Container
      style={{
        width: leftSideWidth,
      }}
    />
  );
}

export default Percent;
