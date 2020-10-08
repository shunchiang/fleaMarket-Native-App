import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton({ title, ...props }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} {...props} onPress={handleSubmit} />;
}
