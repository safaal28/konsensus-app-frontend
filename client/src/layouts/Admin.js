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
import React, { useState, useEffect } from 'react';
import {
  useLocation,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// reactstrap components
import { Container } from 'reactstrap';
// core components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import AdminFooter from 'components/Footers/AdminFooter.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import UploadModal from 'components/Modals/UploadModal.js';
import routes from 'routes.js';
import ReUploadModal from 'components/Modals/ReUploadModal';

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [reUploadModalOpen, setReUploadModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };

  // toggles  file modal between opened and closed (true/false)
  const toggleUploadModal = () => {
    setUploadModalOpen((data) => !data);
  };

  const toggleReUploadModal = () => {
    setReUploadModalOpen((data) => !data);
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: '/admin/index',
          imgSrc:
            require('../assets/img/brand/konsensus_transparent.png')
              .default,
          imgAlt: '...',
        }}
        toggleUploadModal={toggleUploadModal}
        toggleReUploadModal={toggleReUploadModal}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
      <UploadModal
        isOpen={uploadModalOpen}
        toggleOpen={toggleUploadModal}
      />
      <ReUploadModal
        isOpen={reUploadModalOpen}
        toggleOpen={toggleReUploadModal}
      />
    </>
  );
};

export default Admin;
