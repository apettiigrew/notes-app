import React from 'react';

const Layout: React.FC = (props) => {
    return (
        <div className="container-fluid">
            <div className="row row-cols-auto">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;