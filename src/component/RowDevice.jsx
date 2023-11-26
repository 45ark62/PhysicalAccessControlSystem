import "../scss/main.scss";
import "../scss/ftable.scss";
export default function RowDevice(props) {
  return (
    <>
      <tr className="trstyleDev">
        <td className="tdstyle">{props.id}</td>
        <td className="tdstyle">{props.Type}</td>
        <td className="tdstyle">{props.Description}</td>
        <td className={props.Status == 1 ? "status1" : "status0"}></td>
        <div
          onClick={() => props.DeleteDevice(props.id)}
          className="delete"
        ></div>
      </tr>
    </>
  );
}
