let Navbar = () => {
    return (
        <header class="navbar navbar-expand-lg opacity-50">
        <div class="container">
          <button class="navbar-toggler navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#menu"></button>
          <nav class="collapse navbar-collapse justify-content-center" id="menu">
            <ul class="navbar-nav col-12 col-lg-8 justify-content-center">
              <li class="nav-item"><a href="javascript:void(0);" class="nav-link pe-4">HOME</a></li>
              <li class="nav-item"><a href="javascript:void(0);" class="nav-link pe-4">SERVICES</a></li>
              <li class="nav-item"><a href="javascript:void(0);" class="nav-link pe-4">ABOUT</a></li>
              <li class="nav-item"><a href="javascript:void(0);" class="nav-link pe-4">PORTFOLIO</a></li>
              <li class="nav-item"><a href="javascript:void(0);" class="nav-link pe-4">CONTACT US
                </a></li>
              <li class="nav-item"><a href="javascript:void(0);" class="nav-link pe-4"> LOGIN
                </a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;