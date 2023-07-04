import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 300px" }}>
        GalaxyCraft © 2023
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
