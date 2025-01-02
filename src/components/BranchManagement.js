import React, { useState } from 'react';
import Header from './Header';
import BranchTable from './BranchTable';
import Pagination from './Pagination';
import ImportExport from './ImportExport';
import '../BranchManagement.css';

function BranchManagement() {
  const [branches, setBranches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const deleteBranch = (id) => {
    setBranches(branches.filter((branch) => branch.id !== id));
  };

  const onImport = (file) => {
    console.log('Importing:', file.name);
  };

  const onExport = () => {
    console.log('Exporting data...');
  };

  const totalPages = Math.ceil(branches.length / rowsPerPage);
  const currentBranches = branches.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="branch-management">
      <Header />
      <ImportExport onImport={onImport} onExport={onExport} />
      <BranchTable branches={currentBranches} deleteBranch={deleteBranch} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default BranchManagement;
