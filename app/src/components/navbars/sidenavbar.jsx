import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidenavbar = () => {
  return (
    
    <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial', borderRadius: "25px" }}>
      <CDBSidebar textColor="#EEEADE" backgroundColor= "#7f53ac" backgroundImage= "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/contactBio" className="sidebarItems">
              <CDBSidebarMenuItem className='sidebarContent' icon="columns">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/commingSoon" className="sidebarItems">
              <CDBSidebarMenuItem className='sidebarContent' icon="table">Posts</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/commingSoon" className="sidebarItems">
              <CDBSidebarMenuItem className='sidebarContent' icon="user">Gallery</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/commingSoon" className="sidebarItems">
              <CDBSidebarMenuItem className='sidebarContent' icon="chart-line">ToDo</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidenavbar;