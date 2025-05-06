import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import InputSearch from './components/input-search/input-search';
import Table from './components/table/table';
import JiraIssue from './interview-questions/atlassian/jira-issue/jira-issue';

export function App() {

  const sampleData = [
    { id: 1, name: 'Alice Johnson', age: 28, city: 'New York' },
    { id: 2, name: 'Bob Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Charlie Brown', age: 25, city: 'Chicago' },
    { id: 4, name: 'David Wilson', age: 42, city: 'Houston' },
    { id: 5, name: 'Emma Davis', age: 30, city: 'San Francisco' }
];

const columns = ['id', 'name', 'age', 'city'];


  return (
    <>
      {/* <Table data={sampleData} columns={columns} /> */}
      <JiraIssue />
    </>
  )
}
