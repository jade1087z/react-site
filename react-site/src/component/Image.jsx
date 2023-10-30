import React from 'react'

const Image = ( props ) => {
  return (
    <section id="imageType" class={`image__wrap ${props.element}`}>
    <h2>{props.title}</h2>
    <p>이미지유형입니다. 마우스 오버시 자세한 정보가 나오는 구조입니다.</p>
    <div class="image__inner container">
        <div class="image img1">
            <h3 class="img__title">웰시코기</h3>
            <p class="img__desc">털 빠지는게 장난아님</p>
            <a href="/" class="img__btn">자세히 보기</a>
        </div>
        <div class="image img2">
            <h3 class="img__title">말티푸인가?</h3>
            <p class="img__desc">귀엽네요</p>
            <a href="/" class="img__btn yellow">자세히 보기</a>
        </div>
    </div>
</section>
  )
}

export default Image