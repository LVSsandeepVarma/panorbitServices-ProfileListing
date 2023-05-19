import React from "react";
import Card from "react-bootstrap/Card"
import { selectedContact } from "../features/profiles/profilesSlice";
import { useSelector } from "react-redux";
import { left } from "@popperjs/core";
import MapComponent from './map';
import "leaflet/dist/leaflet.css"
import ChatComponent from "./chat";

export default function DetailedProfile() {
    const contactDetails = useSelector(selectedContact);

    return (
        <div className="detailComponent" style={{ background: "none" }}>
            <div>
                <Card style={{ width: "20rem", marginBottom: "10%", border: "none" }}>
                    <Card.Body>
                        <Card.Img className="rounded-circle" variant="top" src={contactDetails[0].profilepicture} alt="profile pic" />
                        <Card.Title>{contactDetails[0]?.name}</Card.Title>
                        <Card.Subtitle className="text-muted" >Username: <b className="details">{contactDetails[0]?.username}</b></Card.Subtitle >
                        <Card.Subtitle className="text-muted" >Email: <b className="details">{contactDetails[0]?.email}</b></Card.Subtitle >
                        <Card.Subtitle className="text-muted" >Phone: <b className="details">{contactDetails[0]?.phone}</b></Card.Subtitle >
                        <Card.Subtitle className="text-muted" >Website: <Card.Link className="details" href={contactDetails[0]?.website}>{contactDetails[0]?.website}</Card.Link></Card.Subtitle >
                        <hr></hr>
                        <Card.Subtitle className="text-muted" >Company</Card.Subtitle >
                        <Card.Subtitle className="text-muted" >Name: <b className="details">{contactDetails[0]?.name}</b></Card.Subtitle >
                        <Card.Subtitle className="text-muted" >catchPhrase: <b className="details">{contactDetails[0]?.company?.catchPhrase}</b></Card.Subtitle >
                        <Card.Subtitle className="text-muted" >bs: <b className="details">{contactDetails[0]?.company?.bs}</b></Card.Subtitle >


                    </Card.Body>
                </Card>
            </div>
            <div className="verticalDivider"></div>
            <Card style={{ width: "100%", border: "none" }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: left }}>Address :</Card.Title>
                    <Card.Subtitle className="text-muted" >Street: <b className="details">{contactDetails[0]?.address?.street}</b></Card.Subtitle >
                    <Card.Subtitle className="text-muted" >Suite: <b className="details">{contactDetails[0]?.address?.suite}</b></Card.Subtitle >
                    <Card.Subtitle className="text-muted" >City: <b className="details">{contactDetails[0]?.address?.city}</b></Card.Subtitle >
                    <Card.Subtitle className="text-muted" >Zipcode: <b className="details">{contactDetails[0]?.address?.zipcode}</b></Card.Subtitle >
                    <div className="mapWrapper1">
                        <br></br>
                        {/* Hello There */}
                        <MapComponent />
                    </div>
                </Card.Body>
            </Card>
            <ChatComponent />
        </div>
    )
}