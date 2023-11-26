import React, { useState } from "react";

const AddDevice = ({ appendDevice }) => {
  const [DeviceType, setDeviceType] = useState("");
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState("");
  const [showAddDevice, setShowAddDevice] = useState(true);
  const addNewDevice = (event) => {
    event.preventDefault();
    const newDevice = {
      DeviceType: DeviceType,
      Description: Description,
      Status: Status,
    };
    appendDevice(newDevice);
    // После добавления устройства можно закрывать форму
    setShowAddDevice(false);
  };
  const toggleAddDevice = () => {
    //переключатель для закрытия формы
    setShowAddDevice((prev) => !prev);
  };
  return (
    showAddDevice && (
      <div className="modal">
        <div id="close_modal" onClick={toggleAddDevice}>
          &#10006;
        </div>
        <form onSubmit={addNewDevice} className="form_txt">
          <h1>Добавить устройство:</h1>
          <br />
          <br />

          <div>
            Введите тип устройства(турникет/магнитная дверь):{" "}
            <input
              type="text"
              value={DeviceType}
              onChange={(event) => setDeviceType(event.target.value)}
            />
          </div>
          <div>
            Введите местонахождение устройства:{" "}
            <input
              type="text"
              value={Description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div>
            Введите статус(1-работает/0-неработает):{" "}
            <input
              type="text"
              value={Status}
              onChange={(event) => setStatus(event.target.value)}
            />
          </div>
          <div>
            <button className="addBTN" type="submit">
              Добавить
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default AddDevice;
