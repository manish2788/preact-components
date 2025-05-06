import { useEffect, useState } from "preact/hooks";

export default function List({data, query}) {
  console.log("List Loaded!!");
  useEffect(() => {
    console.log("List Loaded!! - 2");
    
  }, [query])
  const filteredCityData = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (<div>
    <ul>
      {filteredCityData.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  </div>)
}