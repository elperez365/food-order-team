import React from "react";
import Input from "../UI/Input/Input";
import { createFieldsByInputs, searchErrors } from "../../formUtils";

const CheckOut: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

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
        <input type="submit" value={"invia"} />
      </form>
    </div>
  );
};

export default CheckOut;
