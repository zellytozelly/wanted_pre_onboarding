import React, { useState } from "react";
import styled from 'styled-components';
import {ReactComponent as EyeOpenIcon} from '../image/eye-open.svg';
import {ReactComponent as EyeHideIcon} from '../image/eye-hide.svg';

export default function Input(){
    
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    


    return (
        <LoginWrapper>
            <Label>E-mail</Label>
            <InputText type='email' id='email' label='E-mail' placeholder='E-mail'/> 

            <Label>Password </Label>
            <PasswordBox>
                <InputText type={isRevealPwd ? 'text' : 'password'} value={pwd} onChange={(e) => setPwd(e.target.value)} id='password' label='Password' placeholder='Password'/>    
                <EyeToggle
                    isRevealPwd = {isRevealPwd}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                >{isRevealPwd ? <EyeOpenIcon/> : <EyeHideIcon/>}
                </EyeToggle>
            </PasswordBox>      
        </LoginWrapper>
        

    );
}

const LoginWrapper = styled.div`
    margin: 0 20% 40px 15%;
    padding: 20px;
`
const InputText = styled.input`
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 5px 15px;
    border: solid 1px var(--shadow);
    border-radius: 5px;
    background: var(--white-second);
    opacity: 0.8;
    box-sizing: border-box

    &:focus{
        border: solid 1px var(--grey);
        opacity: 1;
    }
`

const Label = styled.div`
    margin: 5px;
    font-size: 0.8em;
    color: var(--grey);
`
const PasswordBox = styled.div`
    position: relative;
`
const EyeToggle = styled.div`
    cursor: pointer;
    margin: 5px;
    position: absolute;
    top: 15px;
    left: calc(100% - 5px);
    font-size: 0.8em;
    width: ${(props)=>(props.isRevealPwd) ? "23px" : "25px"};
    color: var(--grey);
    path{
        fill: ${(props)=>(props.isRevealPwd) ? "var(--green-mint)" : "var(--grey-lighter)"};
    }
`