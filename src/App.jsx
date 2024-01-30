import { useState } from "react";
import CreatNote from "./components/CreatNote";
import Homee from "./components/Homee";
import StudyNote from "./components/StudyNote";
import { listsNote } from "./data";
import "./App.css";
const getCatchId = [];
function App() {
  const [page, setPage] = useState("home");
  const [findId, setFindId] = useState(getCatchId);
  const [sendData, setSendData] = useState(listsNote);
  function handlerPage(value) {
    setPage(value);
  }
  function handlerIdData(id) {
    setFindId(id);
  }
  function onGetDataSend(obj) {
    console.log(obj);
    setSendData([...sendData, obj]);
    // console.log(sendData);
    // setSendData((prevDataNote) => {
    //   return [obj, ...prevDataNote];
    // });
    setTimeout(() => {
      console.log(sendData);
    }, 3000);
  }
  function handlerToDelete(id) {
    if (id) {
      setPage("home");
      const newData = sendData.filter((blog) => blog.id !== id);
      setSendData(newData);
    }
  }
  return (
    <div className="container">
      {page === "home" && (
        <Homee
          handlerPage={handlerPage}
          handlerIdData={handlerIdData}
          sendData={sendData}
        />
      )}
      {page === "creatNote" && (
        <CreatNote handlerPage={handlerPage} onGetDataSend={onGetDataSend} />
      )}
      {page === "noteStudy" && (
        <StudyNote
          handlerPage={handlerPage}
          findId={findId}
          handlerToDelete={handlerToDelete}
          sendData={sendData}
        />
      )}
    </div>
  );
}

export default App;
