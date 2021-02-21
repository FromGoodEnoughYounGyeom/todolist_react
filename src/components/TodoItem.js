import React from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete, MdStar } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';
import cn from "classnames";

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-right: 15px;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &.star {
        order: -1;
      }
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done &&
      css`
          border: 1px solid #38d9a9;
          color: #38d9a9; 
      `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
      props.done &&
      css`
          color: #ced4da;
          text-decoration: line-through;
      `}
`;

const Important = styled.div`
    display: flex;
    align-items: center;
    justify-contetn: center;
    cursor: pointer;
    color: #ccc; 
    font-size: 1.5rem;
   
    &:hover {
        color: #F5E33F;
    }
    &:active {
        color: #F5E33F;
`;

function TodoItem({ id, done, text, star }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id});
    const onRemove = () => dispatch({ type: 'REMOVE', id});
    // const onImportant = () => dispatch({ type: 'IMPORTANT', star});

    return (
        <TodoItemBlock className={cn("TodoItemBlock", { star })}>

            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>

            <Text done={done}>{text}</Text>
            
            <Remove onClick={onRemove}>       
                <MdDelete/>
            </Remove>
{/* 
            <Important star={star} onClick={onImportant}>
                <MdStar/>
            </Important> */}
            
            
        </TodoItemBlock>
    );
}

export default  React.memo(TodoItem);