import { useState } from "react";
import { calculateTotalCost } from "../../skillswap-functions.js";

function CostCalculator() {
  const [rate, setRate] = useState("");
  const [hours, setHours] = useState("");
  const [total, setTotal] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const hourlyRate = Number(rate);
    const sessionHours = Number(hours);

    if (rate === "" || hours === "" || hourlyRate < 0 || sessionHours < 0) {
      setTotal(null);
      setError("Enter a rate and hours of 0 or more.");
      return;
    }

    setError("");
    setTotal(calculateTotalCost(hourlyRate, sessionHours));
  };

  return (
    <section className="tool-section" aria-labelledby="calculator-heading">
      <h2 id="calculator-heading">Session Cost Calculator</h2>
      <form className="tool-form" onSubmit={handleSubmit}>
        <label>
          Hourly rate ($)
          <input
            type="number"
            min="0"
            step="0.01"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />
        </label>
        <label>
          Hours
          <input
            type="number"
            min="0"
            step="0.5"
            value={hours}
            onChange={(event) => setHours(event.target.value)}
          />
        </label>
        <button type="submit" className="tool-button">
          Calculate
        </button>
      </form>

      {error && <p className="tool-error">{error}</p>}
      {total !== null && (
        <p className="tool-result">Total cost: ${total.toFixed(2)}</p>
      )}
    </section>
  );
}

export default CostCalculator;
