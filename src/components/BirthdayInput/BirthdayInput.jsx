import "./BirthdayInput.css";

function BirthdayInput({ values, handleChange, errors, touched }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="birthday-container">
      <div className="input-group">
        <select
          name="birthday.day"
          value={values.birthday.day}
          onChange={handleChange}
        >
          <option value="" className="select">
            Day
          </option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        {touched?.birthday?.day && errors?.birthday?.day && (
          <p className="error-text">{errors.birthday.day}</p>
        )}
      </div>
      <div className="input-group">
        <select
          name="birthday.month"
          value={values.birthday.month}
          onChange={handleChange}
        >
          <option value="">Month</option>
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        {touched?.birthday?.month && errors?.birthday?.month && (
          <p className="error-text">{errors.birthday.month}</p>
        )}
      </div>
      <div className="input-group">
        <select
          name="birthday.year"
          value={values.birthday.year}
          onChange={handleChange}
        >
          <option value="">Year</option>
          {Array.from({ length: 2008 - 1980 + 1 }, (_, i) => {
            const year = 1980 + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        {touched?.birthday?.year && errors?.birthday?.year && (
          <p className="error-text">{errors.birthday.year}</p>
        )}
      </div>
      {/* {errors.birthday.day && touched.birthday.day && (
          <p className="error-text">{errors.birthday.day}</p>
      )}

      {errors.birthday.month && touched.birthday.month && (
          <p className="error-text">{errors.birthday.month}</p>
        )}
      {errors.birthday.year && touched.birthday.year && (
        <p className="error-text">{errors.birthday.year}</p>
      )} */}
    </div>
  );
}

export default BirthdayInput;
