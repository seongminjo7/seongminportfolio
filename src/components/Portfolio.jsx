import styled from "styled-components"
import { portfolioSections } from "../data/portfolioSections";

export default function Portfolio() {
  return (
    // <PortfolioWrapper>
    //   {portfolioSections.map((section, index) => (
    //     <div key={section.id} className={`portfolio ${section.id}`}>
    //       <div className="top">
    //         <h2>{`#${String(index + 1).padStart(2, "0")}`}</h2>
    //       </div>

    //       <div className="bottom">
    //         <div className="left">
    //           <img src={section.image} alt={section.title} />
    //         </div>{/* left */}

    //         <div className="right">
    //           <div className="projectInfo">
    //             <div className="infoTop">
    //               <div className="infoSub">
    //                 <div className="infoTitle">
    //                   <h3>{section.title}</h3><span>{section.subTitle}</span>
    //                 </div>
    //                 <div className="infoP">
    //                   <p className="responsive">
    //                     {section.responsive ? "Responsive Web" : "Static Web"}
    //                   </p>
    //                   <span>/</span>
    //                   <p>{section.contribution}</p>
    //                 </div>
    //               </div>{/* infoSub */}
    //               <div className="stackList">
    //                 <p>{section.stack}</p>
    //               </div>{/* stackList */}
    //             </div>{/* infoTop */}
    //             <div className="infoBottom">

    //             </div>{/* infoBottom */}
    //           </div>{/* projectInfo */}



    //           <p>{section.description}</p>
    //         </div>{/* right */}
    //       </div>{/* bottom */}
    //     </div>
    //   ))}
    // </PortfolioWrapper>

     <PortfolioWrapper>
      {portfolioSections.map((section, index) => (
        <PortfolioSection key={section.id} className={`portfolio ${section.id}`}>
          <Top>
            <h2>{`#${String(index + 1).padStart(2, "0")}`}</h2>
          </Top>

          <Bottom>
            <Left>
              <img src={section.image} alt={section.title} />
            </Left>

            <Right>
              <ProjectInfo>
                <InfoTop>
                  <InfoSub>
                    <InfoTitle>
                      <h3>{section.title}</h3>
                      <span>{section.subTitle}</span>
                    </InfoTitle>
                    <InfoP>
                      <p className="responsive">
                        {section.responsive ? "Responsive Web" : "Static Web"}
                      </p>
                      <span>/</span>
                      <p>{section.contribution}</p>
                    </InfoP>
                  </InfoSub>
                  <StackList>
                    <p>{section.stack}</p>
                  </StackList>
                </InfoTop>
                <InfoBottom />
              </ProjectInfo>

              <p>{section.description}</p>
            </Right>
          </Bottom>
        </PortfolioSection>
      ))}
    </PortfolioWrapper>
  )
}

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: var(--background-color);
  transition: 0.3s ease;
`;



const Top = styled.div`
  border-bottom: 5px solid var(--background-color);

  h2 {
    font-size: 36px;
    padding-bottom: 10px;
    font-family: var(--font-italic);
    font-style: italic;
    color: var(--background-color);
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 30px;
`;

const Left = styled.div`
  width: 712px;
  height: 453px;
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 13px;
`;

const Right = styled.div`
  width: 560px;
  color: var(--background-color);
  display: flex;
  flex-direction: column;
  font-family: var(--font-main);

  h3 {
    font-family: var(--font-italic);
    font-size: 48px;
    font-style: italic;
    color: var(--background-color);
    margin: 0;
  }

  p {
    margin-top: 20px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: 3px solid var(--main-color);
  padding-bottom: 5px;
  gap: 10px;

  span {
    margin-bottom: 8px;
  }
`;

const InfoP = styled.div`
  display: flex;
  font-size: 18px;
  gap: 16px;
`;

const StackList = styled.div`
  display: flex;
  width: 457px;
  flex-wrap: wrap;
  gap: 4px;

  p {
    font-size: 24px;
    padding: 0 10px 0;
  }
`;

const InfoBottom = styled.div``;

const PortfolioSection = styled.div`
  transition: 0.3s ease;
  /* width: 100%; */
  /* height: 1000px; */
  padding: 80px 150px 148px 150px;
  background-color: var(--main-color);
  border-radius: 80px 80px 0 0;
  box-shadow: 0 -12px 15.6px -10px rgba(0, 0, 0, 0.12);
  position: sticky;
  top: 0;
  z-index: 1;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-child {
    margin-top: 0;
  }

  &:nth-of-type(even) {
    background-color: var(--background-color);

    ${Top} {
      border-color: var(--main-color);
    }

    ${Top} h2,
    ${Right},
    ${Right} h3 {
      color: var(--main-color);
    }

    ${Left} {
      background-color: var(--main-color);
    }
  }
`;

// const PortfolioWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   position: relative;
//   background-color: var(--background-color);
//     transition: 0.3s ease;
  
//   /* 공통 portfolio 클래스 스타일 */
//   .portfolio {
//     transition: 0.3s ease;
//     width: 100%;
//     height: 1000px;
//     padding: 80px 150px 148px 150px;
//     background-color: var(--main-color);
//     border-radius: 80px 80px 0 0;
//     box-shadow: 0 -12px 15.6px -10px rgba(0, 0, 0, 0.12);
//     position: sticky;
//     top: 0;
//     box-sizing: border-box;
//     z-index: 1;
//     margin-top: -80px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     &:first-child {
//       margin-top: 0;
//     }

//     .top {
//       border-bottom: 5px solid var(--background-color);

//       h2 {
//         font-size: 36px;
//         margin: 0;
//         padding-bottom: 10px;
//         font-family: var(--font-italic);
//         font-style: italic;
//         color: var(--background-color);
//       }

      

//     }

//     .bottom {
//       background-color: transparent;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       padding: 120px 30px;

//       .left {
//         width: 712px;
//         height: 453px;
//         padding: 20px;
//         background-color: var(--background-color);
//         border-radius: 13px;
//       }

//       .right {
//       width: 560px;
//       height: 100%;
//         background-color: transparent;
//         color: var(--background-color);
//         display: flex;
//         flex-direction: column;
//         font-family: var(--font-main);
//         /* justify-content: space-between; */

//         h3 {
//           box-sizing: border-box;
//           font-family: var(--font-italic);
//           font-size: 48px;
//           font-style: italic;
//           color: var(--background-color);
//           margin: 0;

//         }
//         .projectInfo{
//           display: flex;
//           flex-direction: column;
//           gap: 50px;
//           font-style: none;
//         }
//         .infoTop{
//           display: flex;
//           flex-direction: column;
//           gap: 30px;

//           .infoSub{
//             display: flex;
//             flex-direction: column;
//             gap: 8px;

//             .infoTitle{
//               display: flex;
//               align-items: flex-end;
//               border-bottom: 3px solid var(--main-color);
//               padding-bottom: 5px;
//               box-sizing: border-box;
//               gap: 10px;
                
//           span{
//             margin-bottom: 8px;
//           }
//             }

//             .infoP{
//               display: flex;
//               font-size: 18px;
//               gap: 16px;
//             }
//           }

//           .stackList{
//             display: flex;
//             width: 457px;
//             align-items: center;
//             align-content: center;
//             gap: 4px;
//             flex-wrap: wrap;

// p{
//   font-size: 24px;
//   padding: 0 10px 0;
// }
//           }
//         }

//       }
//     }
//   }

//   /* 짝수번째 portfolio에 대한 스타일 */
//   .portfolio:nth-of-type(even) {
//     background-color: var(--background-color);
//     color: var(--main-color);
//     transition: 0.3s ease;


//     .top{
//       border-color: var(--main-color);
//     }
//     .top h2,
//     .bottom .right,
//     .bottom .right h3
//     {
//       color: var(--main-color);
//     }

//     .bottom .left {
//       background-color: var(--main-color);
//     }

//     /* .infoTitle{
//       border-bottom: 3px solid var(--background-color);
//     } 이거왜안돼애애애램암ㄴㅇㅁ널ㅇㄷ럼ㄴㅇㄹ */

//   }


// `;
