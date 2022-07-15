import Footer from "../Footer";
import useInput from "../Hooks/use-input";
import "./ProductAdd.scss";

const ProductAdd = (props) => {
  const {
    value: firstNameValue,
    empty: skuEmpty,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput();
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput();
  const {
    value: emailNameValue,
    empty: priceEmpty,
    isNumber: priceIsNumber,
    valueChangeHandler: emailNameChangeHandler,
    inputBlurHandler: emailNameBlurHandler,
    reset: resetEmailName,
  } = useInput();

  let formIsValid = false;

  if (lastNameIsValid) {
    formIsValid = true;
  }

/*   const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control"; */
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
          <div /* className={firstNameClasses} */>
            <label htmlFor="name">SKU</label>
            <input
              type="text"
              id="sku"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {skuEmpty && (
              <p className="error-text">Please, submit required data</p>
            )}
          </div>
          <div /* className={lastNameClasses} */>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
          </div>
        </div>
        <div /* className={emailClasses} */>
          <label htmlFor="name">Price</label>
          <input
            type="text"
            id="price"
            value={emailNameValue}
            onChange={emailNameChangeHandler}
            onBlur={emailNameBlurHandler}
          />
          {priceIsNumber && (
            <p className="error-text">
              Please, provide the data of indicated type
            </p>
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
