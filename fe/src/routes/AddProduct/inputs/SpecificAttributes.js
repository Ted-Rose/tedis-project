import { useState, useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
import Dvd from "./Dvd";
import Book from "./Book";
import Furniture from "./Furniture";

const SpecificAttributes = forwardRef((props, ref) => {
  const [productType, setproductType] = useState("");
  const changeProductType = (e) => {
    props.changeType(e.target.value);
      setproductType(e.target.value);
      props.setIsValid(false);
  };

  const specificAttributeRef = useRef();

  const changeSpecificAttribute = (e) => {
    props.setValue(e);
  };

  const changeSpecificAttributesIsValid = (e) => {
    props.setIsValid(e);
  };
  const typeSwitcherOptions = [
    {
      label: "Type Switcher",
      value: "",
    },
    {
      label: "DVD",
      value: "dvd",
    },
    {
      label: "Furniture",
      value: "furniture",
    },
    {
      label: "Book",
      value: "book",
    },
  ];

  useImperativeHandle(ref, () => ({
    reset() {
      specificAttributeRef.current.reset();
    },
  }));

  return (
    <div>
      <select value={productType} onChange={changeProductType}>
        {typeSwitcherOptions.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}{" "}
          </option>
        ))}
      </select>
      {productType.includes("dvd") && (
        <Dvd
          ref={specificAttributeRef}
          setValue={changeSpecificAttribute}
          setIsValid={changeSpecificAttributesIsValid}
        />
      )}
      {productType.includes("furniture") && (
        <Furniture
          ref={specificAttributeRef}
          setValue={changeSpecificAttribute}
          setIsValid={changeSpecificAttributesIsValid}
        />
      )}
      {productType.includes("book") && (
        <Book
          ref={specificAttributeRef}
          setValue={changeSpecificAttribute}
          setIsValid={changeSpecificAttributesIsValid}
        />
      )}
    </div>
  );
});

export default SpecificAttributes;
