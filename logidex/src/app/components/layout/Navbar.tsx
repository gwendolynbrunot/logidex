import Link from "next/link";
import Image from 'next/image';
import navLogoLight from '../../assets/icons/nav-logo-light.svg';
import dashboardIcon from '../../assets/icons/dashboard-icon.svg';
import dashboardIconActive from '../../assets/icons/dashboard-icon-active.svg';
import myDecisionsIcon from '../../assets/icons/my-decisions-icon.svg';
import myDecisionsIconActive from '../../assets/icons/my-decisions-icon-active.svg';
import auditLogIcon from '../../assets/icons/audit-log-icon.svg';
import auditLogIconActive from '../../assets/icons/audit-log-icon-active.svg';
import signOutIconLight from '../../assets/icons/sign-out-icon-light.svg';

export default function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-inner">
        <div className="navbar-links-wrapper">
          <Link href="/" className="navbar-logo"><Image src={navLogoLight} alt="Nav Icon" /></Link>
          <Link href="/" className="navLink-active">
            <Image className="navIcon active" src={dashboardIconActive} alt="Dashboard Icon" />
            <div className="menu-link-active">Dashboard</div>
          </Link>
          <Link href="/decisions" className="navLink">
            <Image className="navIcon" src={myDecisionsIcon} alt="My Decisions Icon" />
            <div className="menu-link">My Decisions</div>
          </Link>
          <Link href="/decisions/new" className="navLink">
            <Image className="navIcon" src={auditLogIcon} alt="Audit Log Icon" />
            <div className="menu-link">Audit Log</div>
          </Link>
        </div>
        <div className="sign-out-wrapper">
          <button className="sign-out menu-link">
            <Image src={signOutIconLight} alt="Open Door Icon"></Image>
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}