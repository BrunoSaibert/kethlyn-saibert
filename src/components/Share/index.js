import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

import config from "../../lib/config";

import { Container } from "./styles";

function Share({ url, title }) {
  const route = `${config.site.url}${url.replace("/", "")}`;

  return (
    <Container>
      <FacebookShareButton url={route} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <WhatsappShareButton url={route} title={title} separator=" ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TelegramShareButton url={route} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <TwitterShareButton url={route} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </Container>
  );
}

export default Share;
