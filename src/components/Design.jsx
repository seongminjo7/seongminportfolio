import styled from "styled-components"
import { designSections } from "../data/designSections"
import { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Design() {


    const [activeId, setActiveId] = useState(null)

    const handleClick = (id) => {
        setActiveId(id)
    };

    const handleBackClick = (e) => {
        e.stopPropagation();
        setActiveId(null)
    }

    return (
        <DesignWrapper>
            <h2>DESIGN</h2>
            <DesignList>
                {designSections.map((section, index) => (
                    <Lists
                        key={section.id}
                        className={`designs ${section.id} ${activeId === section.id ? 'active' : ''}`}
                        onClick={() => handleClick(section.id)}
                    >
                        <h3>{index + 1}</h3>
                        <div className="designInfo">
                            <p className="title">{section.title}</p>
                            <p className="description">{section.description}</p>
                        </div>{/* designInfo */}

                        <div className="designInfoActive">
                            <div className="textbox">
                                <p className="title">{section.title}</p>
                                <p className="description">{section.moreDescription}</p>
                            </div>{/* textbox */}

                            <div className="designMore">
                                <div className="imgbox">

                                </div>
                            </div>{/* designMore */}
                            <IoMdArrowRoundBack
                                size={30}
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '30px',
                                }}
                                onClick={handleBackClick}
                            />
                        </div>{/* designInfoActive */}

                    </Lists>
                ))}
            </DesignList>
        </DesignWrapper>
    )
}

const DesignWrapper = styled.div`
    /* width: 100%; */
    height: 992px;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    padding: 60px 150px;
    box-sizing: border-box;
    justify-content: space-between;
    transition: background-color 300ms ease;


    h2{
        font-family: var(--font-main);
        font-size: 64px;
        font-weight: bold;
        color: var(--main-color);
    }
`

const DesignList = styled.ul`
    height: 700px;
    display: flex;
    justify-content: space-evenly;
    gap: 60px;
    padding: 0;
    margin: 0;
`

// const Lists = styled.li`
//     height: 100%;
//     padding: 44px 32px;
//     display: flex;
//     flex: .3;
//     flex-direction: column;
//     align-items: flex-start;
//     background-color: var(--main-color);
//     border-radius: 50px;
//     box-sizing: border-box;
//     color: var(--background-color);
//     transition: flex 1s ease, background-color 1s ease; /* ✅ transition 수정: flex 애니메이션 추가 */
//     position: relative;
//     overflow: hidden;

//     h3{
//         font-family: var(--font-italic);
//         font-style: italic;
//         font-size: 280px;
//         color: var(--background-color);
//         margin-top: 20px;
//         margin-bottom: 65px;
//         transition: font-size 1s ease, margin 1s ease; /* ✅ 개별 트랜지션 추가 */

//     }

//     .designInfo{
//         display: flex;
//         flex-direction: column;
//         gap: 30px;
//         font-family: var(--font-main);
//         font-size: 18px;
//         transition: opacity 0.8s ease; /* ✅ opacity 트랜지션 추가 */
//         opacity: 1; /* ✅ 기본 표시 상태 */
        
//         .title{
//             font-weight: bold;
//             font-size: 24px;
//         }

//         .description{
//             transition: 1000ms;
//         }
//     }

//     .designInfoActive{
//         /* ❌ 기존 display: none 제거 */
//         opacity: 0; /* ✅ 처음엔 투명 */
//         max-height: 0; /* ✅ 접혀있는 상태 */
//         overflow: hidden; /* ✅ 높이 애니메이션 안정화 */
//         transition: opacity 1s ease, max-height 1s ease; /* ✅ 슬라이드+페이드 트랜지션 */
//         position: relative; /* ✅ 내용 정렬용 position */
            
//         .textbox{
//             /* position: absolute;
//             left: 80px;
//             top: 53px; */
//             display: flex;
//             gap: 10px;
//             flex-direction: column;

//             .title{
//                 font-family: var(--font-italic);
//                 font-style: italic;
//                 font-size: 40px;
//                 font-weight: bold;
//             }
//         }

//         .designMore{
//             width: 100%;
//             height: 460px;
//             overflow-y: scroll;

//             .imgbox{
//                 height: 1000px;
//                 background-color: var(--background-color);
//             }
//         }
//     }

//     &.active{
//         flex: 1.5; /* ✅ 자연스럽게 확장 */
//         flex-direction: row;
//         transition: flex 1s ease;
        
//         h3{
//             font-size: 50px;
//             margin:0 0 60px;
//         }

//         .designInfo{
//             width: 0;
//             opacity: 0; /* ✅ 사라지게 변경 */
//             pointer-events: none; /* ✅ 클릭 방지 */
//         }

//         .designInfoActive{
//             opacity: 1; /* ✅ 서서히 나타남 */
//             max-height: 1000px; /* ✅ 충분히 큰 높이로 펼쳐짐 */
//             /* ✅ display 대신 max-height+opacity로 트랜지션 처리 */
//         }
//     }
// `








const Lists = styled.li`
    height: 100%;
    padding: 44px 32px;
    display: flex;
    flex: .3;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--main-color);
    border-radius: 50px;
    box-sizing: border-box;
    color: var(--background-color);
    transition: 1000ms;
        position: relative;
        overflow: hidden;



    h3{
        font-family: var(--font-italic);
        font-style: italic;
        font-size: 280px;
        color: var(--background-color);
        margin-top: 20px;
        margin-bottom: 65px;
    transition: 1000ms;

    }

    .designInfo{
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-family: var(--font-main);
        font-size: 18px;
        transition: 1000ms;
        


        .title{
            font-weight: bold;
            font-size: 24px;
        }

        .description{
            transition: 1000ms;
        }
    }

    .designInfoActive{
        display: none;
            
        .textbox{
            position: absolute;
            left: 80px;
            top: 53px;
            display: flex;
            gap: 10px;
            flex-direction: column;

            .title{
                font-family: var(--font-italic);
                font-style: italic;
                font-size: 40px;
                font-weight: bold;
            }
        }


        .designMore{
            height: 460px;
            overflow-y: scroll;
            .imgbox{
                height: 1000px;
                background-color: var(--background-color);
            }
        }
    }

    &.active{
        display: block;
        flex: 1.5;
        
        h3{
            font-size: 50px;
            margin:0 0 60px;
        }

        .designInfo{
            display: none;
        }

        .designInfoActive{
            display: block;
        }
    }
`