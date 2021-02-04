import React from "react";

import { Title, Text } from "../Typography";
import SocialList from "../SocialList";

import config from "../../lib/config";

import * as S from "./styles";

function Bio({ ...props }) {
  return (
    <S.Container {...props}>
      <div className="avatar">
        <img src={config.author.avatar} />
      </div>
      <div className="content">
        <Title as="h4" weight="bold" style={{ marginTop: 0 }}>
          {config.author.name}
        </Title>
        <Text>{config.author.bio}</Text>

        <SocialList />
      </div>
    </S.Container>
  );
}

export default Bio;
