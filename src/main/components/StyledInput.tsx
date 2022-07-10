import styled from "styled-components";
import InputMask from 'react-input-mask';

const Input = styled(InputMask)`
  width: 100%;
  height: 71px;
//   padding: 0 50px 0 15px;
  margin: 0;
  border: 1px solid #ababab;
  font-size: 28px;
  outline: none;
`;

interface IStyledInput {
    onChange: (e:  React.ChangeEvent<HTMLInputElement>) => void;
    alwaysShowMask: boolean;
    id: string;
    value: string;
    onFocus: () => void;
}

export const StyledInput: React.FC<IStyledInput> = (props) => {
  return <Input mask="99/99/9999" {...props} alwaysShowMask={false} />;
};
