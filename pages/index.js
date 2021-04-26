import Head from "next/head";
import Link from "next/Link";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Home</title>
      </Head>
      <div>
        <h2>Sub-Links</h2>
        <Link href="/web-par">
          <li>Temporary List</li>
        </Link>
        <div className="style">This is the Index.js in Pages folder.</div>;
      </div>
    </>
  );
}
