import styled from 'styled-components';

const Setting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2em;
  width: 75%;
`;

const SettingRange = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  text-align: center;
  font-size: 1em;
`;

const SettingButton = styled.button`
  flex: 1 1 auto;
  background-color: transparent;
  padding: 0 0.5em;
  margin: 0;
  font-size: 1.5em;
  color: #7f8c8d;
  border: none;
`;

module.exports = {
  Setting,
  SettingRange,
  SettingButton,
};
