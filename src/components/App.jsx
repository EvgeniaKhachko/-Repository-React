import Header from "./Header/Header";
import List from "./List/List";
import Message from "./Message /Message ";

const App = () => {
  const goodsData = [
    {
      id: "1",
      title: "морква",
    },
    {
      id: "2",
      title: "капуста",
    },
    {
      id: "3",
      title: "буряк",
    },
  ];
  return (
    <div>
      <h1>Hello All</h1>
      <Header />
      <List title="Goods" data={goodsData} />
      <Message text="Куплю машину" author="Марія" />
      <Message text="Продам машину" author="Ліза" />
      <Message text="Куплю машину" author="Саша" />
    </div>
  );
};
export default App;
