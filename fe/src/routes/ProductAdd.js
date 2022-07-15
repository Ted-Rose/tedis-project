import Footer from "../Footer";
import useInput from "../Hooks/use-input";
import "./ProductAdd.scss";

const isEmail = (value) => value.includes("@");
const isNumber = (value) => {
    if (value.trim() === '') {
        return false;
    }
    return !isNaN(value);
};

const ProductAdd = (props) => {
  const {
    value: firstNameValue,
    empty: skuEmpty,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNumber);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isEmail);
  const {
    value: emailNameValue,
    isValid: emailNameIsValid,
    empty: priceEmpty,
    hasError: emailHasError,
    valueChangeHandler: emailNameChangeHandler,
    inputBlurHandler: emailNameBlurHandler,
    reset: resetEmailName,
  } = useInput(isNumber);

  let formIsValid = false;

  if (lastNameIsValid && emailNameIsValid) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const requiredError = (
    <p className="error-text">Please, submit required data</p>
  );
  const dataError = (
    <p className="error-text">Please, provide the data of indicated type</p>
  );

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, emailNameValue);

    resetFirstName();
    resetLastName();
    resetEmailName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className={firstNameClasses}>
            <label htmlFor="name">SKU</label>
            <input
              type="text"
              id="sku"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className="error-text">
                Please, provide the data of indicated type
              </p>
            )}
            {skuEmpty && (
              <p className="error-text">Please, submit required data</p>
            )}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && requiredError}
          </div>
        </div>
        <div className={emailClasses}>
          <label htmlFor="name">Price</label>
          <input
            type="text"
            id="price"
            value={emailNameValue}
            onChange={emailNameChangeHandler}
            onBlur={emailNameBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Please, provide the data of indicated type</p>
          )}
          {priceEmpty && (
            <p className="error-text">Please, submit required data</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default ProductAdd;
