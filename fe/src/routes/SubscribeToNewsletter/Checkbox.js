import "./Checkbox.scss";

const Checkbox = ({ value, onChange }) => (
    <input
      className="checkbox"
      type="checkbox"
      checked={value}
      onChange={onChange}
    />
);
export default Checkbox;
