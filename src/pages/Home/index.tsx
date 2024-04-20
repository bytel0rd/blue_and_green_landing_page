import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="https://cdn.pixabay.com/photo/2022/12/18/13/48/skater-7663466_1280.png"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="https://cdn.pixabay.com/photo/2022/01/11/17/04/city-6931092_1280.jpg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="https://cdn.pixabay.com/photo/2024/03/07/14/59/ai-generated-8618749_1280.png"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={"Modern Digital Infrastructure & Connectivity"}
        content={"Unlocking possibilities with cutting-edge digital infrastructure and uninterrupted connectivity and POWER."}
        icon="https://cdn.pixabay.com/photo/2016/05/13/12/29/urban-1389838_1280.jpg"
        id="mission"
      />
      <ContentBlock
        direction="right"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="https://cdn.pixabay.com/photo/2022/04/24/08/08/park-7153125_1280.png"
        id="product"
      />
            <ContentBlock
        direction="left"
        title={"Bicycle and Walkable Centric Urban Design"}
        content={"Pedal, stroll, and thrive in our cities, designed for people, not just cars. Where every path leads to connection, healthy, sustainable, and connected lifestyle."}
        icon="https://cdn.pixabay.com/photo/2021/01/10/10/55/boy-5904735_1280.jpg"
        id="product"
      />
    </Container>
  );
};

export default Home;
