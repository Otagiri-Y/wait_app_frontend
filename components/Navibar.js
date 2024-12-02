// components/Navbar.js
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/queue-info">Queue Info</Link>
      </li>
      <li>
        <Link href="/free-queue">Free Queue</Link>
      </li>
      <li>
        <Link href="/paid-queue">Paid Queue</Link>
      </li>
      <li>
        <Link href="/admin-delete">Admin Delete</Link>
      </li>
      <li>
        <Link href="/completed">Completed</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
