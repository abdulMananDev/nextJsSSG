import Link from "next/Link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data
    }
  };
};

const TemporaryList = ({ users }) => {
  return (
    <div>
      This is the temporary list
      <ul className="flex">
        {users.map(ninja => (
          <Link href={`/web-par/${ninja.id}`} key={ninja.id}>
            <li>
              <span>{ninja.id}</span> <span>{ninja.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default TemporaryList;
