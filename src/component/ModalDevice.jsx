import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ModalDevice = () => {
  const { id } = useParams();
  console.log("Device ID from useParams:", id);
  const [localDevice, setLocalDevice] = useState(null);

  useEffect(() => {
    async function getDeviceById() {
      try {
        const getDevice = await axios.get(
          `http://127.0.0.1:8000/api/device/${id}`
        );
        setLocalDevice(getDevice.data);
        console.log(getDevice.data);
      } catch (error) {
        console.error("Error fetching person:", error.message);
      }
    }

    getDeviceById();
  }, [id]);

  return (
    <>
      {localDevice && (
        <div className="modal">
          <Link to="/jurnal" style={{ textDecoration: "none" }}>
            <div id="close_modal">&#10006;</div>
          </Link>
          <div className="modal_txt">
            Id устройства: {localDevice.id}
            <br />
            Тип устройства {localDevice.DeviceType} <br />
            Описание: {localDevice.Description} <br />
            Статус {localDevice.Status} <br />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDevice;
