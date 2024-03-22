import React from "react";

import { createFieldsByInputs, searchErrors } from "../../formUtils";

import Input from "../UI/Input/Input";
import Button from "../UI/Button";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCurrentView } from "../../redux/slices/modalSlice";

import { postOrder } from "../../data/endpoints";

import { toast } from "react-toastify";

const CheckOut: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputs = formRef.current?.querySelectorAll("input");
    const fields = inputs ? createFieldsByInputs(Array.from(inputs)) : [];
    let isValid = false;

    console.log(fields);

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

      const orderObj = {
        id: Math.random().toString(),
        customer: {
          name: fields[0].value,
          email: fields[1].value,
          street: fields[2].value,
          postalCode: fields[3].value,
          city: fields[4].value,
        },
        date: "2022-01-01",
        products: cart,
      };

      postOrder(orderObj).then((response) => {
        console.log(response);
      });

      toast.success("Form inviato con successo");
      dispatch(setCurrentView("success"));
    }
    return { isValid, fields };
  };

  return (
    <div>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="control flex flex-col items-center"
        ref={formRef}
      >
        <Input label={"Full Name"} action="FULL-NAME" required />
        <Input label={"E-Mail Address"} action="EMAIL" type="email" required />
        <Input label={"Street"} action="NO-CONTROLL" required />
        <div className="control-row mb-2 w-full">
          <Input label={"Postal Code"} action="POSTAL" required />
          <Input label={"City"} action="CITY" required />
        </div>
        <Button text="invia" type="submit" style="classicFullSize" />
      </form>
    </div>
  );
};

export default CheckOut;
