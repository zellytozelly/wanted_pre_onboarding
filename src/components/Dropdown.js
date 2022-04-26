import React, { useState } from "react";
import styled from 'styled-components';
import {ReactComponent as SearchIcon} from '../image/search.svg';

export default function Dropdown(){
    const textOptions = [
        "All",
        "The A",
        "The B",
        "The C",
        "This A",
        "This B",
        "This C"
    ];

    const [searchItem, setSearchItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState('All');
    // const onChangeSelect = ();

    return (
        <DropdownWrapper>
            <DropdownBox
                onClick={()=>{isOpen ? setIsOpen(false) : setIsOpen(true)}}
            >
                {item}
                <Arrow>▼</Arrow>
            </DropdownBox>
            {isOpen ?  
                <SelectWrapper>
                    <IconPosition><SearchIcon/></IconPosition>
                    <SelectInput
                        placeholder="Search Symbol"
                        onChange={(e)=>{
                            setSearchItem(e.target.value);
                        }}
                        
                    
                    ></SelectInput><hr/>
                    
                    {textOptions.filter((data)=> {
                        if(searchItem == ''){
                            return data
                        }else if(data.toLowerCase().includes(searchItem.toLowerCase())){
                            return data
                        }
                    }).map(data => {
                        return <SelectOptions onClick={()=>{setItem(data); setIsOpen(false);}}>{data}</SelectOptions>;
                    })
                
                    }
                    
                </SelectWrapper>
            :''}
        
        </DropdownWrapper>
    );
}

const DropdownWrapper = styled.div`
    width: 100%;
    padding: 20px;
    margin-bottom: 300px;
`
const DropdownBox = styled.div`
    width: 240px;
    padding: 14px 10px 14px 10px;
    margin: 0 30% 5px 30%;
    border: 1px solid var(--shadow);
    border-radius: 5px; 
    background: var(--white);
    line-height: 15px;
    cursor: pointer;
    position: relative;
`
const Arrow = styled.div`
    position: absolute;
    top: 14px;
    left: calc(100% - 22px);
    font-size: 0.6em;
`
const SelectWrapper = styled.div`
    width: 240px;    
    padding-bottom: 10px;
    margin: 0 30% 40px 30%;
    border: 1px solid var(--shadow);
    border-radius: 5px; 
    background: var(--white);
    line-height: 15px;
    position: relative;
    box-shadow: 0 1px 1px 0 var(--shadow), 0 1px 5px 0 var(--grey-light);
`
const IconPosition = styled.div`
    margin: 5px;
    position: absolute;
    top: 8px;
    left: 5px;
    width: 12px;
    path{
        fill: var(--shadow);
    }
`
const SelectInput = styled.input`
    width: 200px;
    margin-left: 20px;    
    padding: 10px 0 5px 10px;    
    border-radius: 5px; 
    background: var(--white);
    line-height: 15px;
`
const SelectOptions = styled.div`
    width: 100%;
    padding: 10px;    
    background: var(--white);
    line-height: 15px;
    cursor: pointer;
    :hover {
        background: var(--white-second);
    }
`