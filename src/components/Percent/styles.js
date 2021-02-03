import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: ${(props) => props.theme.primary};

  height: 4px;
`;
