import "./App.css";
import { CustomCalendar } from "./main/components/CustomCalendar";
import "react-calendar/dist/Calendar.css";
import React from "react";
import { useFormik } from "formik";

interface ICommon {
  birthDay: Date | null;
}

function App() {
  const formik = useFormik<ICommon>({
    initialValues: {
      birthDay: new Date(),
    },
    validate: (values) => {},
    onSubmit: (values) => {},
    // enableReinitialize: true,
  });

  console.log(formik.values.birthDay);

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomCalendar formik={formik} formName={"birthDay"} />
    </form>
  );
}

export default App;
