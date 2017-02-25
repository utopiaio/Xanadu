import styled from 'styled-components';

const TaskItem = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  padding: 0.75em .25em;
  min-height: 75px;
  border-bottom: 1px solid #D0D0D0;
  align-content: center;
  align-items: center;
`;

const TaskItemInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-right: 1em;
`;

const TaskItemAction = styled.button`
  flex: 0 1 32px;
  height: 50px;
  padding: .25em;
  fontSize: 1.8em;
  background-color: transparent;
  border: none;
  color: ${props => props.done ? '#2ecc71' : '#95a5a6'};
`;

module.exports = {
  TaskItem,
  TaskItemInfo,
  TaskItemAction,
};
