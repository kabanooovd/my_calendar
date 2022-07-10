import { FormikValues } from "formik";
import React from "react";
import Calendar, {
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from "react-calendar";
import styled from "styled-components";
import { Flex } from "../styles/Components";
import { StyledInput } from "./StyledInput";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { dateHalper } from "../utils";

const StyledCalendar = styled(Calendar)`
  width: 100%;
  // border: 1px solid #ababab;
`;

const CalendarIcon = styled(BsFillCalendar2WeekFill)`
  color: blue;
  position: absolute;
  right: 15px;
  top: 25%;
  cursor: pointer;
`;

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  position: relative;
  border: 1px solid red;
  margin: 50px;
`;

interface ICustomCalendar {
  formik: FormikValues;
  formName: string;
}

export const CustomCalendar: React.FC<ICustomCalendar> = (props) => {
  const { formik, formName } = props;
  const [val, setVal] = React.useState<string>(
    dateHalper(formik.values[formName])
  );
  // const [val, setVal] = React.useState<string>("");
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);
  const onChangeHndler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const condition =
      e.currentTarget.value.split("").includes("/") &&
      e.currentTarget.value.split("").includes("_");

    if (!condition) {
      const array = e.currentTarget.value.split("/");
      const insertDate = new Date(+array[2], +array[1] - 1, +array[0]);
      // console.log("=> ", +array[2], +array[1] - 1, +array[0]);
      formik.setFieldValue(formName, new Date(insertDate));
      formik.handleChange(e);
    }
    setVal(e.currentTarget.value);
  };
  const calendarChangeHandler = (e: any) => {
    formik.setFieldValue(formName, e);
    setVal(dateHalper(e));
    // console.log(e);
  };
  return (
    <DatePickerContainer>
      <StyledInput
        onChange={onChangeHndler}
        id="email"
        value={val}
        alwaysShowMask={false}
        onFocus={() => {
          setShowCalendar(false);
        }}
      />
      <CalendarIcon size={30} onClick={() => setShowCalendar(!showCalendar)} />
      {showCalendar && (
        <Flex Width="100%">
          <StyledCalendar
            value={formik.values[formName] || new Date()}
            onChange={calendarChangeHandler}
          />
        </Flex>
      )}
    </DatePickerContainer>
  );
};
