import { useEffect, useState } from "preact/hooks"


export default function List({items, filter}) {  
  const [visible, setVisible] = useState(false);
  const [listItems, setListItems] = useState(items);
  
  function toggleDisplay() {
    setVisible(prev => !prev);
  }
  function filterData() {
    let filteredList = items.filter(item => item.status === filter);
    setListItems(filteredList);
  }
  useEffect(() => {
    console.log(items);
    filterData();
  }, [items, filter])

  return (<>
    <button onClick={toggleDisplay}>{visible ? "▼" : "▶"} Show Substasks </button>
    {visible && <ul>
      {listItems.map(task => <li>{task.title} - {task.status}</li>)}
    </ul>}
  </>)
}