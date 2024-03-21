import React from "react";
import Input from "../UI/Input/Input";
import { createFieldsByInputs, searchErrors } from "../../formUtils";
import Button from "../UI/Button";
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentView } from "../../redux/slices/modalSlice";
import { toast } from "react-toastify";

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
        toast.error(`${error} non è valido`);
        return;
      });
    }

    if (emptyValue) {
      empties.forEach((error) => {
        toast.error(`${error} è vuoto`);
        return;
      });
    }
    if (!error && !emptyValue) {
      isValid = true;
      toast.success("Form inviato con successo");
      dispatch(setCurrentView("success"));
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
        <Button text="invia" type="submit" style="classic" />
      </form>
    </div>
  );
};

export default CheckOut;
