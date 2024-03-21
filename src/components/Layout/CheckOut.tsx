import React from "react";
import Input from "../UI/Input/Input";
import { createFieldsByInputs, searchErrors } from "../../formUtils";
import Button from "../UI/Button";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { closeModal, setCurrentView } from "../../redux/slices/modalSlice";

const CheckOut: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputs = formRef.current?.querySelectorAll("input");
    const fields = inputs ? createFieldsByInputs(Array.from(inputs)) : [];
    let isValid = false;

    const { error, errors, emptyValue, empties } = searchErrors(fields);

    if (error) {
      errors.forEach((error) => {
        console.log(`${error} non è valido`);
      });
    }

    if (emptyValue) {
      empties.forEach((error) => {
        console.log(`${error} è vuoto`);
      });
    }
    if (!error && !emptyValue) {
      isValid = true;
    }
    return { isValid, fields };
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)} className="control" ref={formRef}>
        <Input label={"Full Name"} action="FULL-NAME" required />
        <Input label={"E-Mail Address"} action="EMAIL" type="email" required />
        <Input label={"Street"} action="NO-CONTROLL" required />
        <div className="control-row">
          <Input label={"Postal Code"} action="POSTAL" required />
          <Input label={"City"} action="CITY" required />
        </div>
        <Button
          onClick={() => dispatch(setCurrentView("success"))}
          text="invia"
          type="submit"
          style="classic"
        />
      </form>
    </div>
  );
};

export default CheckOut;
