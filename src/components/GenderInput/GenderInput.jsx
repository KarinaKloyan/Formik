import "./GenderInput.css";

function GenderInput({ values, handleChange, errors, touched }) {
  return (
    <div className="input-group">
      <select
        value={values.gender}
        onChange={handleChange}
        name="gender"
        className={errors.gender ? "error" : ""}
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && touched.gender && (
        <p className="error-text">{errors.gender}</p>
      )}
    </div>
  );
}

export default GenderInput
