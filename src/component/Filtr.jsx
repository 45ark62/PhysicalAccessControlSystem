import React, { useState, useEffect } from "react";
import axios from "axios";
import "../scss/main.scss";
import "../scss/ftable.scss";
const Filtr = ({ onDeviceChange }) => {
  const [devicesList, setDevList] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");

  const Api = "http://127.0.0.1:8000/api";

  async function fetchDevicesList() {
    try {
      const response = await axios.get(Api + "/device/list");
      setDevList(response.data);
    } catch (error) {
      console.error("Error fetching devices list:", error.message);
    }
  }

  useEffect(() => {
    fetchDevicesList();
  }, []);

  const handleDeviceChange = (event) => {
    const deviceId = event.target.value;
    setSelectedDeviceId(deviceId);
    onDeviceChange(deviceId); // Pass the selected device ID to the parent component
    console.log("Selected Device ID:", deviceId);
  };

  return (
    <div>
      <label
        htmlFor="deviceFilter"
        style={{ marginBottom: "50px", marginLeft: "70px" }}
      >
        Выберите устройство:
      </label>
      <select
        id="deviceFilter"
        value={selectedDeviceId}
        onChange={handleDeviceChange}
        className="DeviceFilter "
      >
        <option value="" className="optionDevice">
          Все устройства
        </option>
        {devicesList.map((device) => (
          <option key={device.id} value={device.id} className="optionDevice">
            {device.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtr;
