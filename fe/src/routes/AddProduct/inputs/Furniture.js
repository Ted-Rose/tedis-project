import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import FurnitureHeight from "./FurnitureHeight";
import FurnitureWidth from "./FurnitureWidth";
import FurnitureLength from "./FurnitureLength";

const Furniture = forwardRef((props, ref) => {
  const [dimensions, setDimensions] = useState({
    height: "",
    width: "",
    length: "",
  });

  const changeDimensions = (e) => {
    const { name, value } = e;
    setDimensions((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const dimensionsArray = [
      dimensions["height"],
      dimensions["width"],
      dimensions["length"],
    ];

    props.setValue({
      value: dimensionsArray.join("x"),
      name: "specificAttribute",
    });
  };

  const [isValid, setIsValid] = useState({
    height: false,
    width: true,
    length: true,
  });

  const changeIsValid = (e) => {
    const { name, value } = e;
    setIsValid((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    props.setIsValid((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dimensionsRef = useRef();

  useImperativeHandle(ref, () => ({
    reset() {
      dimensionsRef.current.reset();
    },
  }));

  return (
    <div id="Furniture">
      <FurnitureHeight
        changeDimensions={changeDimensions}
        changeIsValid={changeIsValid}
        ref={dimensionsRef}
      />
      <FurnitureWidth
        changeDimensions={changeDimensions}
        changeIsValid={changeIsValid}
        ref={dimensionsRef}
      />
      <FurnitureLength
        changeDimensions={changeDimensions}
        changeIsValid={changeIsValid}
        ref={dimensionsRef}
      />
    </div>
  );
});
export default Furniture;
