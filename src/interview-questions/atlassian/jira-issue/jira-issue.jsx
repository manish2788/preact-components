import { useEffect, useState } from "preact/hooks"
import { getIssue, statuses, getSubtasks } from "./task"
import List from "./list";
import Dropdown from "./dropdown";
import './jira-issue.css'

export default function JiraIssue() {  
  const [title, setTitle] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState(statuses[0])
  
  async function fetchIssueDetail() {
    const issue = await getIssue();
    const taskList = await getSubtasks();
    setTitle(issue.title);
    setTasks(taskList);
  }

  function observeStatusChange(value) {    
    setStatus(value);
  }
  
  useEffect(() => {
    fetchIssueDetail();
  }, [])

  return (<div className="container">
    <div className="header">
      <h2>{title}</h2>
      <Dropdown options = {statuses} onChangeCallback = {observeStatusChange}/>
    </div>
    <div className="content">
      <List items = {tasks} filter = {status}/>
    </div>
  </div>)
}