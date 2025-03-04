import { useState } from "react";

export default function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [data, setData] = useState([]);

  const handleRowsChange = (event) => {
    setRows(event.target.value);
  };

  const handleColsChange = (event) => {
    setCols(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let size = rows * cols;
    let arr = [];

    for (let i = 0; i < size; i++) {
      arr.push(i + 1);
    }

    const chunks = [];

    for (let i = 0; i <= arr.length; i = Number(i) + Number(cols)) {
      const chunk = arr.slice(i, i + Number(cols));
      chunks.push(chunk);
    }

    setData(chunks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="input-rows">
          <span>{"Rows"}</span>
          <input
            if="input-rows"
            type="text"
            value={rows}
            onChange={handleRowsChange}
          />
        </label>
        <label for="input-cols">
          <span>{"Cols"}</span>
          <input
            if="input-cols"
            type="text"
            value={cols}
            onChange={handleColsChange}
          />
        </label>
        <button type="submit">{"Submit"}</button>
      </form>

      <table>
        <tbody>
          {data.map((chunk, index) => (
            // Always provide a key; index can be used if no unique ID is available
            <tr key={index}>
              {chunk.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
