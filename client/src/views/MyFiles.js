/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useState } from 'react';

import { getFiles } from 'components/Auth/authFunctions';
import Header from 'components/Headers/Header.js';
import FileTable from 'components/Files/FileTable.js';


const MyFiles = () => {
  const [ownedFiles, setOwnedFiles] = useState([]);

  useEffect(() => {
    getFiles(
      '/file/owned',
      setOwnedFiles
    );
  }, []);

  return (
    <>
      <Header />
      <FileTable files={ownedFiles} />
    </>
  );
};

export default MyFiles;
