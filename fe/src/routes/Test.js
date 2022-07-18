import { useState } from "react";

function Test() {
    const [taxa, settaxa] = useState("");
    const [custos, setcustos] = useState("");
    const [FC1, setFC1] = useState("");
    const [FC2, setFC2] = useState("");
    const [FC3, setFC3] = useState("");
    const [select, setSelect] = useState([]);
  
    const handleCapacity = (e) => {
      if (!e.target.value) {
        setSelect([]);
        return;
      }
  
      if (select.includes(e.target.value)) {
        setSelect((value) => value.filter((val) => val !== e.target.value));
      } else {
        setSelect((value) => [...value, e.target.value]);
      }
    };
  
    return (
      <div className="">
        <div className="input">
          <label>n° </label>
          <select value={select} onChange={handleCapacity} >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="nome">A =</label>
          <input
            className="loteecocompra"
            type="number"
            id="loteecocompra"
            required="required"
            value={taxa}
            onChange={(e) => settaxa(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="nome">B =</label>
          <input
            className="custodepedido"
            type="number"
            id="custodepedido"
            required="required"
            value={custos}
            onChange={(e) => setcustos(e.target.value)}
          />
        </div>
        {select.includes("1") && (
          <div className="input">
            <label htmlFor="nome">
              C<sub>1</sub> =
            </label>
            <input
              className="fluxo1"
              type="number"
              id="fluxo1"
              required="required"
              value={FC1}
              onChange={(e) => setFC1(e.target.value)}
            />
          </div>
        )}
        {select.includes("2") && (
            <div className="input">
              <label htmlFor="nome">
                C<sub>1</sub> =
              </label>
              <input
                className="fluxo1"
                type="number"
                id="fluxo1"
                required="required"
                value={FC1}
                onChange={(e) => setFC1(e.target.value)}
              />
            </div>
          ) && (
            <div className="input">
              <label htmlFor="nome">
                C<sub>2</sub> =
              </label>
              <input
                className="fluxo2"
                type="number"
                id="fluxo2"
                required="required"
                value={FC2}
                onChange={(e) => setFC2(e.target.value)}
              />
            </div>
          )}
        {select.includes("3") && (
            <div className="input">
              <label htmlFor="nome">
                C<sub>1</sub> =
              </label>
              <input
                className="fluxo1"
                type="number"
                id="fluxo1"
                required="required"
                value={FC1}
                onChange={(e) => setFC1(e.target.value)}
              />
            </div>
          ) && (
            <div className="input">
              <label htmlFor="nome">
                C<sub>2</sub> =
              </label>
              <input
                className="fluxo2"
                type="number"
                id="fluxo2"
                required="required"
                value={FC2}
                onChange={(e) => setFC2(e.target.value)}
              />
            </div>
          ) && (
            <div className="input">
              <label htmlFor="nome">
                C<sub>3</sub> =
              </label>
              <input
                className="fluxo3"
                type="number"
                id="fluxo3"
                required="required"
                value={FC3}
                onChange={(e) => setFC3(e.target.value)}
              />
            </div>
          )}
      </div>
    );
}
  
export default Test;