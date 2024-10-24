const Message = ({ text, author }) => {
  return (
    <>
      <h4>{text}</h4>
      <span>{author} </span>
    </>
  );
};
export default Message;

// const Message = (props) => {
//   console.log(props);
//   return (
//     <>
//       <h4>{props.text}</h4>
//       <span>{props.author} </span>
//     </>
//   );
// };
// export default Message;
