import styled from 'styled-components';

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return 'rgba(0, 230, 118, 0.7)';
  }
  if (props.isDragReject) {
    return 'rgba(255, 23, 68, 0.7)';
  }
  if (props.isDragActive) {
    return 'rgba(33, 150, 243, 0.7)';
  }
  return 'rgba(54, 45, 144, 0.3)';
};

export const DropContainerStyled = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 1px;
  border-radius: 3px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #ffffff;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;
