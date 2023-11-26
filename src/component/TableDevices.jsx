import React from "react";
import RowDevice from "./RowDevice";
const TableDevices = ({ devicesL, deleteDeviceItem }) => {
  return (
    <>
      {devicesL.map((deviceItem) => (
        <RowDevice
          id={deviceItem.id}
          Type={deviceItem.DeviceType}
          Description={deviceItem.Description}
          Status={deviceItem.Status}
          DeleteDevice={deleteDeviceItem}
        />
      ))}
    </>
  );
};
export default TableDevices;
