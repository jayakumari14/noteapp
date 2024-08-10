import data from "../assets/data";
import ListItems from "../components/ListItems";
const NotesPage = () => {
  return (
    <>
      <div>
        {data.map((val) => {
          return (
            <>
              <ListItems note={val} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default NotesPage;
