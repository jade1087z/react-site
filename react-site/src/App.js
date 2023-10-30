import React from "react";
import './assets/css/reset.css';
import './assets/css/style.css';

import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import Image from "./component/Image";
import ImageText from "./component/ImageText";
import Card from "./component/Card";
import Banner from "./component/Banner";
import Text from "./component/Text";

const App = () => {
    return (
        <>
            <Header fonts="nexon"/>
            <Main >
              <Slider element="nexon" />
              <Image element="nexon section" title="포트폴리오가 실력이다." /> 
              <ImageText element="section nexon" title="이미지 텍스트 유형입니다." />
              <Card element="nexon section" title="임종한 사이트"/>
              <Banner element="nexon" title="im" />
              <Text element="nexon section" />
            </Main>
            <Footer element="nexon section gray" />
        </>
    );
};

export default App;
