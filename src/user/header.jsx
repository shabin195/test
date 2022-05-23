import React from 'react';
function Header() {   
        return (
            <div className="header-wrpr">
                <div className="left">
                    <h3>countries</h3>
                </div>
                <div className="right">
                   <ul>
                       <li>All</li>
                       <li>Asia</li>
                       <li>Europe</li>
                   </ul>
                </div>
            </div>
        )
}
export default Header;