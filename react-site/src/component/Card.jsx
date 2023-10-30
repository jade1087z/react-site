import React from "react";
import cardbg01 from "../assets/img/cardbg01.jpg";
import cardbg02 from "../assets/img/cardbg02.jpg";
import cardbg03 from "../assets/img/cardbg03.jpg";

const cardInfo = [
    {
        img: cardbg01,
        title: "웹표준 사이트 만들기",
        desc: "사이트를 만들기 위한 기초 강의",
    },
    {
        img: cardbg02,
        title: "반응형 사이트 만들기",
        desc: "사이트를 만들기 위한 기초 강의",
    },
    {
        img: cardbg03,
        title: "페럴렉스 사이트 만들기",
        desc: "사이트를 만들기 위한 기초 강의",
    },
];
const Card = (props) => {
    return (
        <section id="cardType" className={`card__wrap ${props.element}`}>
            <h2>{props.title}</h2>
            <p>웹디, 웹퍼블, 프론트엔드 개발자를 위한 사이트</p>
            <div className="card__inner container">
                
                {cardInfo.map((card, key) => (
                    <article className="card" key={key}>
                    <figure className="card__header">
                        <img src={card.img} alt="웹표준" />
                    </figure>
                    <div className="card__body">
                        <h3 className="title">{card.title}</h3>
                        <p className="desc">{card.desc}</p>
                        <a href="/" className="btn">
                            자세히 보기
                            <span aria-hidden="true">
                                <svg
                                    width="51"
                                    height="8"
                                    viewBox="0 0 51 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article>
                ))}
                
                
            </div>
        </section>
    );
};

export default Card;
