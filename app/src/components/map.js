import React from "react"
import {MapContainer, TileLayer, Marker, Tooltip} from "react-leaflet"
import { useSelector } from "react-redux";
import { selectedContact } from "../features/profiles/profilesSlice";


const mapStyle = {
    width: '100%',
    height: '350px',
    justifyContent: "center"
  };

export default function MapComponent(){
    const contactDetails = useSelector(selectedContact);

    return(
        <div>
      <MapContainer style={mapStyle} center={[contactDetails[0]?.address?.geo?.lat, contactDetails[0]?.address?.geo?.lng]} zoom={1} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[contactDetails[0]?.address?.geo?.lat, contactDetails[0]?.address?.geo?.lng]}>
        <Tooltip>
                latitude: {contactDetails[0]?.address?.geo?.lat} <br />
                Longitude: {contactDetails[0]?.address?.geo?.lng} <br />
              </Tooltip>
        </Marker>
      </MapContainer>
    </div>
            
    )
}