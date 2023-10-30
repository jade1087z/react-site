import React from 'react'
const textInfo = [
    {
        title: "검색 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
        btn: "더보기",
    },
    {
        title: "검색 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
        btn: "더보기",
    },
    {
        title: "검색 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
        btn: "더보기",
    },
    {
        title: "검색 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
        btn: "더보기",
    },
    {
        title: "검색 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
        btn: "더보기",
    },
    {
        title: "검색 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
        btn: "더보기",
    },
]
const Text = ( props ) => {
  return (
    <section id="textType" class={`text__wrap ${props.element}`}>
    <span>텍스트 유형</span>
    <h2>스크립트를 익히는 방법</h2>
    <div class="text__inner container">
        {textInfo.map((text, key) => (
            <div class={`text t${key+1}`} key={key}>
                <h3 class="title">{text.title}</h3>
                <p class="desc">{text.desc}</p>
                <a href="/" class="btn">{text.btn}</a>
            </div>
        ))}
    </div>
</section>
  )
}

export default Text