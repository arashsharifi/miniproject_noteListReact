import Alert from "react-bootstrap/Alert";

function NoteColor({ ondata, handlerIdData }) {
  const list = [];
  const groceries = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  let mygroceries = groceries[Math.floor(Math.random() * groceries.length)];

  list.push(mygroceries);
  const obj = new Set(list);
  const one = Array.from(obj);
  // function handlerIdData(id) {
  //   console.log(id);
  // }

  return (
    <>
      {one.map((variant) => (
        <Alert
          onClick={() => handlerIdData(ondata.id)}
          key={variant}
          variant={variant}
        >
          {ondata.title}
        </Alert>
      ))}
    </>
  );
}

export default NoteColor;
