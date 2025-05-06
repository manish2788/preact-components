import { useState } from 'preact/hooks'

const Table = ({ data, columns }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(row => 
      columns.some(column => 
          String(row[column]).toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
      <div>
          <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onInput={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
          />
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                  <tr>
                      {columns.map(column => (
                          <th key={column} style={{ padding: '8px', textAlign: 'left' }}>{column}</th>
                      ))}
                  </tr>
              </thead>
              <tbody>
                  {filteredData.map((row, index) => (
                      <tr key={index}>
                          {columns.map(column => (
                              <td key={column} style={{ padding: '8px' }}>{row[column]}</td>
                          ))}
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
};

export default Table;