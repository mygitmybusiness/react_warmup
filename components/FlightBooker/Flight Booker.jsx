import { useState } from "react";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("oneway");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
      <div>
        <label>
          <input
            type="radio"
            name="flighttype"
            value="oneway"
            checked={selectedOption === "oneway"}
            onChange={handleChange}
          />
          {"One-way flight"}
        </label>

        <label>
          <input
            type="radio"
            name="flighttype"
            value="returnflight"
            checked={selectedOption === "returnflight"}
            onChange={handleChange}
          />
          {"Return flight"}
        </label>
      </div>
      <div>
        <label>
          {"Departure"}
          <input type="date" name="departure" />
        </label>

        {selectedOption === "returnflight" && (
          <label>
            {"Return flight"}
            <input type="date" name="return" />
          </label>
        )}
      </div>

      <button type="submit">{"Submit"}</button>
    </form>
  );
}
