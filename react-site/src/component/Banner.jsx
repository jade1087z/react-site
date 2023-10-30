import React from "react";

const Banner = (props) => {
    return (
        <section id="bannerType" class={`banner__wrap ${props.element}`}>
            <h2 class="blind">베너 영역</h2>
            <div class="banner__inner">
                <h3 class="title">{props.title}</h3>
                <p class="desc">
                    더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                    <a href="/" title="유튜브 페이지 이동">
                        youtube.com
                    </a>
                </p>
                <span class="small">베너유형 1</span>
            </div>
        </section>
    );
};

export default Banner;
