import Link from "next/Link";
const Header = () => {
  return (
    <div>
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/web-par">
          <a>Users</a>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
