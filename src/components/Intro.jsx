import styled from "styled-components"

export default function Intro() {
    return (
        <IntroWrapper>
            <TitleWrapper>
                <div className="hello"><p>Hello, i'm</p><p className="secondary">SeongMinJo</p></div>
                <div className="wellcome"><p>Wellcome to my</p><p className="italic">Portfolio</p></div>
            </TitleWrapper>
        </IntroWrapper>
    )
}

const IntroWrapper = styled.div`
    width: 100%;
    height: 906px;
    background-color: var(--background-color);
    color: var(--text-color);
    position: relative;
    transition: background-color 0.3s ease;
`
const TitleWrapper = styled.div`
    position: absolute;
    top: 210px;
    right: 80px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    div{
        display: flex;
        align-items: flex-end;
        gap: 30px;

        p{
            font-family: var(--font-main);
            font-size: 64px;
            font-weight: 600;
        }
        p:first-child{
            margin-bottom: 30px !important;
            letter-spacing: -0.04em
        }
        .secondary{
            font-family: var(--font-secondary);
            font-size: 96px;
            color: var(--main-color);
        }

        .italic{
            font-size: 110px;
            font-family: var(--font-main);
            font-style: italic;
            font-weight: bold;
            color: var(--main-color);
        }
    }
`