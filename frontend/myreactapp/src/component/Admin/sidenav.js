function AdminSideNav() {
  return (
    <>
      <nav style={{float:"left"}} id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="/adminhome">
                <i class="fas fa-tachometer-alt"></i> Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/addroute">
                <i class="fas fa-route"></i> Add Route
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/deleteroute">
                <i class="fas fa-trash-alt"></i> Delete Route
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/addstation">
                <i class="fas fa-subway"></i> Add Station
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/addbus">
                <i class="fas fa-bus"></i> Add Bus
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/deletebus">
                <i class="fas fa-bus"></i> Delete Bus
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AdminSideNav;
