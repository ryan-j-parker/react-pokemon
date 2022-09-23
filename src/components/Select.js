export default function Select({ options, changeHandler }) {
  return (
    <>
      <label htmlFor="select">Sort by type</label>
      <select className="sort" name="select" onChange={(e) => changeHandler(e.target.value)}>
        <option value="all">all pokemon</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}