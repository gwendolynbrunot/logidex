import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-inner">
        <div className="navbar-links-wrapper">
          <Link href="/" className="navIcon"><i className="bi bi-house"></i></Link>
          <Link href="/decisions" className="navIcon"><i className="bi bi-person-lines-fill"></i></Link>
          <Link href="/decisions/new" className="navIcon"><i className="bi bi-plus-square"></i></Link>
          <Link href="/audit-log" className="navIcon"><i className="bi bi-file-earmark-text"></i></Link>
        </div>
        <div className="sign-out-wrapper">
          <button className="btn btn-secondary-on-dark">
            <i className="bi bi-box-arrow-right btn-icon"></i>
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}