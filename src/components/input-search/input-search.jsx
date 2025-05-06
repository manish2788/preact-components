import Input from "../input/input";
import List from "../list/list";
import {CityData} from '../../data/cities';
import { useRef, useState } from "preact/hooks";

export default function InputSearch() {
  console.log("InputSearch Loaded");
  const [query, setQuery] = useState("");

  return (<div>
    <h4>Input Search Rendered!!</h4>
    <Input onChangeCallback={setQuery}/>
    <List data={CityData} query={query}/>
  </div>)
}