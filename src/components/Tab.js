import React,  { useState } from "react";
import styled from 'styled-components';
import '../App.css';

export default function Toggle(){
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler=(index)=>{
    setActiveIndex(index)
  }
  const tabContArr=[
    {
        tabTitle:(
          <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 감자 </li>
        ),
        tabCont:(
            <div> 🥔Potato </div>
        )
    },
    {
        tabTitle:(
          <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 고구마 </li>
        ),
        tabCont:(
            <div> 🍠Sweet Potato </div>
        )
    },
    {
        tabTitle:(
          <li className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> 카레라이스 </li>
        ),
        tabCont:(
            <div> 🍛Curried Rice </div>
        )
    }
  ];

  return (
    <div>
      <TabSetting>
        <TabList>
          {tabContArr.map((section, index)=>{
            return <TabItem>{section.tabTitle}</TabItem>
          })}
          <ClickSlideWrapper>
            <ClickSlide activeIndex={activeIndex}></ClickSlide>
          </ClickSlideWrapper>
        </TabList>

        <div>
          { tabContArr[activeIndex].tabCont }
        </div>
      </TabSetting>
    </div>
  );

}



const TabSetting = styled.div`
  text-align: center;
  padding: 0 40px 40px 40px;
  margin: 40px 30% 30% 30%;
  border: 1px solid #a5acb1;
  border-radius: 5px;
  background: #fff;
`;

const TabList = styled.ul`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  list-style:none;
  padding: 0;
  margin: 0 0 30px 0;
`;

const TabItem = styled.p`
  flex: 1;
  padding: 12px 0 0 0;
  text-align: center;
  color: var(--grey-lighter);
  cursor: pointer;
  transition: opacity 180ms ease-out;
  outline: 0;

  &:hover,
  &.tab-is-active {
    color: var(--black);
  }
`;

const ClickSlideWrapper = styled.div`
  width: 100%; 
  height: 2px; 
  background: var( --grey-light);
  position: absolute; 
  bottom: 0px; 
  left: 0px; 
`;

const ClickSlide = styled.div`
  width: 33%;
  position: relative;
  bottom: 0;
  height: 2px;
  background-color: var(--green-mint);
  transition: activeIndex*33 800ms cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 2;
`;