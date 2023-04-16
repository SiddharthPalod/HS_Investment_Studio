import { useParams } from "react-router-dom";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";

const AboutWithTitle = () => {
    const { title } = useParams();
    switch (title) {
      case "Angel_Investor":
        return <About1 />;
      case "Peer-to-Peer_Lender":
        return <About2 />;
      case "Venture_Capitalist":
        return <About3 />;
      case "Banker":
        return <About4 />;
      default:
        return null;
    }
  };

export default AboutWithTitle