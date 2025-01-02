import React from 'react';
import '../ImportExport.css';

function ImportExport({ onImport, onExport }) {
  return (
    <div className="import-export">
      <button onClick={onExport}>Export to Excel</button>
      <label className="import-label">
        Import from Excel
        <input type="file" onChange={(e) => onImport(e.target.files[0])} />
      </label>
    </div>
  );
}

export default ImportExport;
