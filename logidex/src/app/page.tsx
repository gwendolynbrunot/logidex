// logidex/app/page.tsx
import Link from "next/link";
import Image from 'next/image';
import PersonIcon from './assets/icons/person-icon.svg';
import CardList from "./components/CardList";

export default function Home() {
  return (
    <div className="dashboard-wrapper">
      <div className="title-wrapper">
        <Image src={PersonIcon} alt="Person Icon" />
        <h1 className="">Dashboard</h1>
      </div>
      <div className="container-fluid dashboard-container">
        <section className="dashboard-top-actions">
          <div className="recent-decisions-wrapper">
            <h2 className="">Recently Logged Decisions</h2>
            <CardList maxItems={4} variant="tile" themeVariant="light" />
          </div>
          <div className="insights-wrapper">
            <h2 className="">Insights at a Glance</h2>
          </div>
        </section>

        <section className="in-progress">
          <h2 className="">In Progress</h2>
          <CardList maxItems={5} variant="compact" themeVariant="light" />
        </section>
      </div>
    </div>
  );
}