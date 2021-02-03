import React from "react";
import * as FontAwesomeIcons from "react-icons/fa";

import config from "../../lib/config";

import * as S from "./styles";

const SocialList = () => {
  return (
    <S.Container>
      {config.social.map(({ title, url, icon }, index) => (
        <a key={index} title={title} target="_blank" rel="noopener" href={url}>
          {React.createElement(FontAwesomeIcons[icon], { size: 30 })}
        </a>
      ))}
    </S.Container>
  );
};

export default SocialList;
