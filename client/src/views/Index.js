import {
  getAllFiles,
  getRecentFiles,
} from 'components/Auth/authFunctions';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import { useEffect, useState, useContext } from 'react';

import Header from 'components/Headers/Header.js';
import FileCard from 'components/File/FileCard';
import { getStarredFiles } from 'components/Auth/authFunctions';

const Index = (props) => {
  const [allFiles, setAllFiles] = useState([]);
  const [recentFiles, setRecentFiles] = useState([]);
  const [starredFiles, setStarredFiles] = useState([]);

    useEffect(() => {
    getAllFiles(setAllFiles);
    getRecentFiles(setRecentFiles);
    getStarredFiles(setStarredFiles);
  }, []);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--8 pb-7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <p className="text-secondary font-weight-300">
              Suggested
            </p>
          </Col>
        </Row>
        <Row>
          {recentFiles.map((file) => {
            let isStarred = false;
            starredFiles.forEach((f) => {
              if (file.id === f.id) {
                isStarred = true;
              }
            });
            return (
              <Col lg={{ size: 'auto' }}>
                <FileCard fileId={file.id} isStarred={isStarred} />
              </Col>
            );
          })}
        </Row>
        <Row className="pt-7">
          <Col className="mb-5 mb-xl-0" xl="8">
            <h3>All Files</h3>
          </Col>
        </Row>
        <Row>
          {allFiles.map((file) => {
            let isStarred = false;
            starredFiles.forEach((f) => {
              if (file.id === f.id) {
                isStarred = true;
              }
            });
            return (
              <Col lg={{ size: 'auto' }}>
                <FileCard fileId={file.id} isStarred={isStarred} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Index;
