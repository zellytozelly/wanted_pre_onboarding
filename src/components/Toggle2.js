import React, { useState } from "react";
import styled from 'styled-components';

export default function Toggle2(){
    const [isChecked, setIsChecked] = useState(false);
    const left = '기본';
    const right = '상세';
    return(
        <ToggleWrapper>
            <CheckBox
                type="checkbox"
                onChange={()=>{isChecked ? setIsChecked(false) : setIsChecked(true)}}
            />
            <LeftSide isChecked={isChecked}>{left}</LeftSide>
            <RigthSide isChecked={isChecked}>{right}</RigthSide>
            
        </ToggleWrapper>

    );
}

const ToggleWrapper = styled.div`
    margin: 0 30% 40px 32%;
    padding: 10px;
    background: var(--grey-background);
    border-radius: 2em;
    width: 160px;
    height: 30px;
    position: relative;
`
const LeftSide = styled.div`
    cursor: pointer;
    position: absolute;
    font-weight: var(--bold-900);
    font-size: var(--small);
    top: 7px;
    left: 27px;
    color: ${(props) => props.isChecked ? 'var(--grey-lighter)' : 'var(--black-second)'};

`
const RigthSide = styled.div`
    cursor: pointer;
    position: absolute;
    font-weight: var(--bold-900);
    font-size: var(--small);
    top: 7px;
    left: 107px;
    color: ${(props) => props.isChecked ? 'var(--black-second)' : 'var(--grey-lighter)'};
`

const CheckBox = styled.input`
    cursor: pointer;
    padding: 12px 0 12px 0;
    background: var(--white);
    position: absolute;
    border-radius: 2em;
    width: 78px;
    left: 3px;
    top: 3px;
    transition: all 0.2s ease-in-out;
    :checked{
        background: var(--white);
        left: 79px;
        transition: all 0.2s ease-in-out;
    }
`