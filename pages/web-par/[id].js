export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const pathArr = data.map(user => {
    console.log(user.id.toString());
    return {
      params: {
        id: user.id.toString()
      }
    };
  });
  console.log(pathArr);
  return {
    paths: pathArr,
    fallback: false
  };
};

export const getStaticProps = async context => {
  console.log(context);
  const id = context.params.id;
  console.log(id + "l22");
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      user: data
    }
  };
};

const Details = ({ user }) => {
  return (
    <div className="">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
export default Details;
