export default function Dropdown({options, onChangeCallback}) {

  function handleValueChange(evt) {
    const newValue = evt.target.value;
    onChangeCallback(newValue);
  }

  return(<>
    <select onChange={handleValueChange}>
      {options.map(option => <option>{option}</option>)}
    </select>
  </>)
}