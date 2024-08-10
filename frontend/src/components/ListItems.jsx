const ListItems = ({ note }) => {
  return (
    <>
      <h1 className="bg-red-100 m-2">{note.body}</h1>
      <p className="bg-blue-100 m-2">{note.title}</p>
    </>
  );
};

export default ListItems;
