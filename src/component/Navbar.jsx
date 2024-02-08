import React from "react";

export const Navbar = () => {
    return(
        
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Newsmag</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <div className="nav-link" href="#">Feauture</div>
            </li>
            <li className="nav-item">
                <div className="nav-link" href="#">Technology</div>
            </li>
            <li className="nav-item">
                <div className="nav-link" href="#">Business</div>
            </li>
            <li className="nav-item">
                <div className="nav-link" href="#">Health</div>
            </li>
            <li className="nav-item">
                <div className="nav-link" href="#">Sport</div>
            </li>
        </ul>
    
    </div>
  </div>
</nav>

        
    )
}
// export default Navbar;