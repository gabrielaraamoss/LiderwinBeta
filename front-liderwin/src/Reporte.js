import "./assets/css/dashboard.css";
import "./assets/css/styles.css";
import { Link } from "react-router-dom";

const Reporte = () => {
  return (
    <body>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">LIDERWIN</a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3">Sign out</a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-link">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Reporte
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>Reporte de productos</h2>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>
            <form className="contact-group">
              <label>Título</label>
              <input
                className="input"
                type="text"
                name="title"
                placeholder="Título"
                required
              />
              <label>Elija marca</label>
              <select className="input" name="products" required>
                <option value="" disabled selected>
                  Productos
                </option>
                <option value="gye">Nexxt</option>
                <option value="uio">Ledvance</option>
                <option value="cue">Sylvania</option>
              </select>
              <label>Fecha</label>
              <input className="input" type="date" name="date" required />
              <label>Elige Ciudad</label>
              <select className="input" name="city" required>
                <option value="" disabled selected>
                  Ciudad
                </option>
                <option value="gye">Guayaquil</option>
                <option value="uio">Quito</option>
                <option value="cue">Cuenca</option>
              </select>
              <label>Detalles</label>
              <textarea
                className="input"
                placeholder="Detalles sobre el reporte"
                required
              ></textarea>
              <a className="primary-btn message-submit text-decoration-none">
                Generar reporte
              </a>
              <button className="secondary-btn clear-fields" type="reset">
                Limpiar
              </button>
            </form>
          </main>
        </div>
      </div>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

      <script
        src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"
        integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"
        integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha"
        crossorigin="anonymous"
      ></script>
      <script src="https://d3js.org/d3.v5.min.js"></script>
    </body>
  );
};

export default Reporte;
