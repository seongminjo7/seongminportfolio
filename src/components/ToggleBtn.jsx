import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa6";

export default function ToggleBtn() {
    return (
        <Buttons>
            <ToggleBtn>
                <Icons>
                    <FiMoon size={20} />
                    <FiSun size={20} />
                </Icons>
            </ToggleBtn>

            <TopBtn>
                <FaArrowUp size={16} />
            </TopBtn>

        </Buttons>
    )
}

const Buttons = styled.div`
    position: fixed;
    bottom: 20px;
    right: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    z-index: 1000;
    `

const Icons = styled.div`
    height: 38px;
    border-radius: 999px;
    border: solid 3px var(--main-color);
`

const TopBtn = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 999px;
    border: solid 3px var(--main-color);
`