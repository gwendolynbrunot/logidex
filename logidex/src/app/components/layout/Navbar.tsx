'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../../../../lib/supabase';

export default function Navbar() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserEmail(user?.email ?? null);
    };

    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <div>
      <nav className="navbar-wrapper">
        <div className="navbar-inner">
          <div className="navbar-links-wrapper">
            <Link href="/" className="navIcon"><i className="bi bi-house"></i></Link>
            <Link href="/my_decisions" className="navIcon"><i className="bi bi-person-lines-fill"></i></Link>
            <Link href="/new_decision" className="navIcon"><i className="bi bi-plus-square"></i></Link>
            <Link href="/audit-log" className="navIcon"><i className="bi bi-file-earmark-text"></i></Link>
          </div>

          <div className="sign-out-wrapper flex items-center gap-2">
            {/* <span className="user-email text-sm text-gray-300">
              {userEmail || 'Not signed in'}
            </span> */}
            <button onClick={handleSignOut} className="btn btn-secondary-on-dark">
              <i className="bi bi-box-arrow-right btn-icon"></i>
              Sign Out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
