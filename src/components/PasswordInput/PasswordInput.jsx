import "./PasswordInput.css";

function PasswordInput({ values, handleChange, errors, touched }) {
  return (
    <>
      <div className="input-group">
        <input
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          name="password"
          className={errors.password && touched.password ? "error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error-text">{errors.password}</p>
        )}
      </div>
      <div className="input-group">
        <input
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          className={
            errors.confirmPassword && touched.confirmPassword ? "error" : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error-text">{errors.confirmPassword}</p>
        )}
      </div>
    </>
  );
}

export default PasswordInput;
