import { useState, useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
import Dvd from "../inputs/Dvd";
import Book from "../inputs/Book";
import Furniture from "../inputs/Furniture";

const SpecificAttributes = forwardRef((props, ref) => {
  const [productType, setproductType] = useState("");
  const changeProductType = (e) => {
      props.changeType(e.target.value);;
      setproductType(e.target.value);
  };

  const specificAttributeRef = useRef();

  const changeSpecificAttribute = (e) => {
    props.setValue(e);
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
        <Dvd ref={specificAttributeRef} setValue={changeSpecificAttribute} />
      )}
      {productType.includes("furniture") && (
        <Furniture
          ref={specificAttributeRef}
          setValue={changeSpecificAttribute}
        />
      )}
      {productType.includes("book") && (
        <Book
          ref={specificAttributeRef}
          setValue={changeSpecificAttribute}
        />
      )}
    </div>
  );
});

export default SpecificAttributes;
