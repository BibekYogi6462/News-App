import "../Components/style.css";
const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4 fw-bold">
            Hamro Samachar
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <div
              className="nav-link px-3 py-2 rounded-pill mx-2 my-1 hover-effect"
              onClick={() => setCategory("technology")}
            >
              Technology
            </div>
            <div
              className="nav-link px-3 py-2 rounded-pill mx-2 my-1 hover-effect"
              onClick={() => setCategory("business")}
            >
              Business
            </div>
            <div
              className="nav-link px-3 py-2 rounded-pill mx-2 my-1 hover-effect"
              onClick={() => setCategory("health")}
            >
              Health
            </div>
            <div
              className="nav-link px-3 py-2 rounded-pill mx-2 my-1 hover-effect"
              onClick={() => setCategory("science")}
            >
              Science
            </div>
            <div
              className="nav-link px-3 py-2 rounded-pill mx-2 my-1 hover-effect"
              onClick={() => setCategory("sports")}
            >
              Sports
            </div>
            <div
              className="nav-link px-3 py-2 rounded-pill mx-2 my-1 hover-effect"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
