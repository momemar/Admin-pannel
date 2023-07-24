import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { NavItem } from 'react-bootstrap';
import Dashboard from '../../pages/dashboard';

export default function Sidebar() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <NavItem>
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/UserProfile">User Profile</Nav.Link>
                <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </NavItem>

        </Nav>
    );
}


