import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`

    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
    }

    .date_area {
        display: flex;
        color: #333;
      }
    
    .left_col {
        margin-right: 5px;
        font-weight: 700;
        font-size: 40px;
      }
      
      .right_col {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

    
    .month_area {
    font-family: "Roboto";
    font-size: 14px;
    }
    
    .year_area {
    line-height: 1;
    }  

    .tasks-left {
        color: #6A89CC;
        letter-spacing: -0.5px;
        font-size: 12px;
        font: italic 700 35px "Roboto Condensed";
    }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

 
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
    return(
        <TodoHeadBlock>
            <div className="header">
                <div className="date_area">
                <div className="left_col">
                    <div className="day_area">{day}</div>
                </div>
                <div className="right_col">
                    <div className="month_area">{month}</div>
                    <div className="year_area">{year}</div>
                </div>
                </div>
                <div className="tasks-left"> 남은할일 {undoneTasks.length}개 </div>
            </div>
        </TodoHeadBlock>
    );
}

export default TodoHead;