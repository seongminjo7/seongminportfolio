import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioSections } from "../data/portfolioSections";
import { section } from "framer-motion/client";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen((prev) => !prev)
    return (
        <HeaderWrapper className={menuOpen ? "active" : ""}>
            <HedearTop>
                <Logo>Seongmin Jo</Logo>
                <Btns onClick={toggleMenu}>
                    <AnimatePresence mode="wait" initial={false}>
                        {menuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <IoClose size={48} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="hamburger"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <RxHamburgerMenu size={38} strokeWidth={1.1} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Btns>
            </HedearTop>

            <Nav>
                <li className="about"><h2>About Me</h2></li>
                <li className="project">
                    <h2>Project</h2>
                    <ProjectListWrapper>
                        {portfolioSections.map((section) => (
                            <ProjectLists key={section.id}>
                                <div className="textBox">
                                    <h3>{section.navTitle}</h3><span>{section.subTitle}</span>
                                </div>
                            </ProjectLists>
                        ))}
                    </ProjectListWrapper>
                </li>
                <li className="design"><h2>Design</h2></li>
            </Nav>
            <SnsLink></SnsLink>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 25px 20px 30px;
    display: flex;
    background-color: var(--background-color);
    box-sizing: border-box;
    border: 5px solid var(--main-color);
    border-radius: 70px;
    z-index: 9999;
    transition: 500ms;

    &.active{
        flex-direction: column;
        border-radius: 40px;
    }
`
const HedearTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 80px;

    ${HeaderWrapper}.active &{
        justify-content: space-between;
    }
`

const Logo = styled.h1`
    font-family: var(--font-secondary);
    font-size: 28px;
    color: #C2C0B9;
`

const Btns = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--main-color);

    svg {
      display: block;
    }
`
const Nav = styled.ul`

    display: none;
    width: 500px;
    font-family: var(--font-secondary);

    li{
        width: fit-content;

        h2{
            font-weight: normal;
            font-size: 56px;
            color: var(--main-color);
            transition: 500ms;
        }

        &:hover h2{
            font-weight: bold;
            cursor: pointer;
        }
    }

    .project{
        display: flex;
    }

    ${HeaderWrapper}.active & {
        display: flex !important;
        flex-direction: column !important;
    }
`
const ProjectListWrapper = styled.ul`
    display: none;
    flex-direction: column;
    margin-top: 38px;
    gap: 10px;

    ${Nav} .project:hover &{
    display: flex;
    }
`

const ProjectLists = styled.li`
    cursor: pointer;

    .textBox{
        width: fit-content;
        position: relative;
        padding-bottom: 5px;
        display: flex;
        display: flex;
        align-items: flex-end;
        gap: 5px;
    }

    h3{
        color: var(--main-color);
        font-size: 24px;
        font-weight: normal;
    }

    .textBox::after{
        content: "";
        display: block;
        width: 0;
        height: 3px;
        background-color: var(--main-color);
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        transition: 500ms;
    }

    .textBox:hover::after{
        width: 100%;
        opacity: 1;
    }

    span{
        color: var(--main-color);
        font-size: 13px;
        padding-bottom: 5px;
    }
`

const SnsLink = styled.div``