import './FullNameInput.css'

function FullNameInput({ values, handleChange, errors, touched }){
 return(
            <div className="fullname-container">
              <div className="input-group">
                <input
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && touched.name && (
                  <p className="error-text">{errors.name}</p>
                )}
              </div>

              <div className="input-group">
                <input
                  placeholder="Last name"
                  value={values.lastname}
                  onChange={handleChange}
                  name="lastname"
                  className={errors.lastname ? "error" : ""}
                />
                {errors.lastname && touched.lastname && (
                  <p className="error-text">{errors.lastname}</p>
                )}
              </div>
            </div>
 )
}

export default FullNameInput