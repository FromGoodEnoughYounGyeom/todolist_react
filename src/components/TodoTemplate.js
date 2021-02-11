import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 412px;
    height: 512px;

    position: relative;
    background: white;
    border-radius: 16px;
    background-color: white;
    box-shadow: 10px 10px 10px #c1c0b9;

    margin: 0 auto;

    margin-top 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({children}) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;