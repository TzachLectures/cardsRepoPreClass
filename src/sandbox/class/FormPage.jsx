import React from "react";
import FormComponent from "./FormComponent";

export default function FormPage() {
  return (
    <div>
      <FormComponent
        initialForm={{
          firstName: "",
          lastName: "",
        }}
      />
    </div>
  );
}
