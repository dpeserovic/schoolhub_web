import React from 'react';

import Nav from 'react-bootstrap/Nav';

export default () => (
    <div>
        <Nav className = 'navbar'>
            <Nav.Item>
                <Nav.Link disabled>
                    <h3 className = 'link-1'>SchoolHub</h3>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
);