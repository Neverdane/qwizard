import React from "react";
import { withFormik } from "formik";
import CardEditor from "../../components/Card/CardEditor";

export default withFormik({
  mapPropsToValues: props => ({
    question: props.question || "",
    response: props.response || "",
    labels:
      (props.labels &&
        props.labels.map(label => ({
          label: label.name,
          value: label.name,
          id: label.id
        }))) ||
      []
  }),
  handleSubmit: (values, {props, resetForm}) => {
    props.handleSubmit(values, resetForm);
  }
})(({ values, handleChange, setFieldValue, ...props }) => (
  <form onSubmit={props.handleSubmit} autoComplete={"off"}>
    <CardEditor
      onQuestionChange={handleChange}
      onResponseChange={handleChange}
      onLabelsChange={value => setFieldValue("labels", value)}
      onLabelCreate={name => {
        setFieldValue("labels", [
          ...values.labels,
          { label: name, value: name }
        ]);

        props
          .handleLabelCreate(name)
          .then(({ data: { createLabel: label } }) => {
            return setFieldValue("labels", [
              ...values.labels,
              {label: label.name, value: label.name, id: label.id}
            ]);
          });
      }}
      {...props}
      {...values}
    />
  </form>
));
