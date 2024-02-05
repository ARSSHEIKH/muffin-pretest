const CustomDropdown = ({ options }) => (
  <select className="form-select select-menu" aria-label="Default select example">
    {options?.map((option) => <option value={option?.value}>{option?.name}</option>)}
  </select>
);
export default CustomDropdown