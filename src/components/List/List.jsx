const List = ({ data, title }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <section key={item.id}>
            <li>
              {item.title} <button>Delete</button>
            </li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default List;
