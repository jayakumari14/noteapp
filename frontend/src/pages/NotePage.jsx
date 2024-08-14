import data from "../assets/data";
import { useParams } from "react-router-dom";

const NotePage = () => {
  let nodeId = useParams();
  console.log(nodeId);
  return (
    <>
      <div>
        <h1 className="text-4xl">Single Note</h1>
      </div>
    </>
  );
};

export default NotePage;
