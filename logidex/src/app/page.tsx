// logidex/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="dashboard-wrapper">
      <h1 className="">Dashboard</h1>
      <div className="container-fluid dashboard-container">
        <section className="dashboard-top-actions">
          <div className="pending-decisions-wrapper">
            <h2 className="">Pending Decisions</h2>
            <p className="">No pending decisions right now.</p>
          </div>
          <div className="recent-activity-wrapper">
            <h2 className="">Recent Activity</h2>
            <ul className="">
              <li>No recent activity yet.</li>
            </ul>
          </div>
        </section>

        <section className="quick-actions">
          <h2 className="">Quick Actions</h2>
          <div className="quick-actions-links">
            <Link href="/decisions/new" className="">New Decision</Link>
            <Link href="/decisions" className="">View All</Link>
          </div>
        </section>
      </div>
    </div>
  );
}