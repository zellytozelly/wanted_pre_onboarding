import React from "react";
import styled from 'styled-components';

export default function Toggle() {
    return (
      <Wrapper>
        <CheckBox
          type="checkbox"
        />
      </Wrapper>
    );
  }
// checkbox wrapper
const Wrapper = styled.div`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 0;
`;

const CheckBox = styled.input`
  width: 10rem;
  height: 2rem;
  background: var(--grey-background);
  border-radius: 2em;
  color: var(--grey-lighter);
  cursor: pointer;
  
  /* 선택X 텍스트 */
  ::before {
    z-index: 1;
    position: absolute;
    content: '기본';
    width: 5rem;
    height: 2rem;
    display: flex;
    padding: 0 0 0 2.3em;
    justify-content: flex-start;
    align-items: center;
    color: var(--grey);
    font-weight: var(--bold-900);
    font-size: var(--small);

  }

  /* 선택X 원 */
  ::after {
    position: relative;
    content: '';
    display: block;
    width: 5em;
    height: 1.6em;
    top: calc((2rem - 1.6em) / 2);
    left: calc((2rem - 1.6em) / 2);
    border-radius: 2em;
    background: var(--white);
    /* 원 이동 트랜지션 */
    transition: all 0.2s ease-in-out;
  }
  &:checked {
    background: var(--grey-background);
    /* 배경색 변경 트랜지션 */
    transition: all 0.2s ease-in-out;
    /* 선택 O 텍스트 */
    ::before {
      z-index: 1;
      position: absolute;
      padding: 0 0 0 6em;
      content: '상세';
      align-items: center;
      justify-content: center;
      font-weight: var(--bold-900);
      font-size: var(--small);
      color: var(--grey);
    }
    /* 선택 O 원 */
    ::after {
      content: '';
      top: calc((2rem - 1.6em) / 2);
      left: calc(10rem - 5.2em);
      width: 5em;
      height: 1.6em;
      display: block;
      position: relative;
      border-radius: 2em;
      background: white;
    }
  }
`;
const ComponentWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
`;

const Components = (
  <ComponentWrapper>
    <Toggle></Toggle>
  </ComponentWrapper>
);

