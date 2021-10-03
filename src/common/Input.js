const Input = ({ formik, label, name, type = "text" }) => {
    return (
      <div className="form-control">
        <label>{label}</label>
        <input
          type={type}
          placeholder={`${name}...`}
          name={name}
          // value={formik.values.name}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps(name)}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="error-field">{formik.errors[name]}</div>
        )}
      </div>
    );
  };
  
  export default Input;
  