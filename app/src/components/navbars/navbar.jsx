import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from "react-bootstrap/Card"
import { selectedContact, profilesList, getUserProfile } from "../../features/profiles/profilesSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useNavigate } from "react-router";


export default function Header() {
    const dispatch = useDispatch();
    const contactDetails = useSelector(selectedContact);
    const navigate = useNavigate()
    const profilesData = useSelector(profilesList);
    const [isCardVisible, setCardVisibility] = React.useState(false);
    const [neighbourContacts, setNeighbourContacts] = React.useState([]);
    const handleSelectedContact = (obj) => {
        dispatch(getUserProfile(obj))
        navigate("/contactBio/#");
    }
    React.useEffect(() => {
        setCardVisibility(false);
        const indexOfContact = profilesData.findIndex(obj => obj?.name === contactDetails[0]?.name)
        if (indexOfContact === 0) {
            setNeighbourContacts([profilesData[1], profilesData[2]])
        } else if (indexOfContact === profilesData?.length - 1) {
            setNeighbourContacts([[indexOfContact - 1], profilesData[indexOfContact - 2]])
        } else {
            setNeighbourContacts([profilesData[indexOfContact - 1], profilesData[indexOfContact + 1]])
        }
    }, [contactDetails])


    const toggleCardVisibility = () => {
        setCardVisibility(!isCardVisible);
    };
    return (
        <div className="navComponent" style={{ width: "100%" }}>
            <Navbar className="navHeader">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand href="#" className="justify-content-end" onClick={toggleCardVisibility}>
                            <Navbar.Brand className="justify-content-end">
                                <img className="rounded-circle" src={contactDetails[0]?.profilepicture} alt="profile" width={"30px"} height={"30px"} />
                            </Navbar.Brand>
                            <Navbar.Text>{contactDetails[0]?.name}</Navbar.Text>
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isCardVisible && (
                <Card style={{ width: '25rem', marginTop: '20px', float: "right", boxShadow: "5px solid" }}>
                    <Card.Body className="contactBody">
                        <Card.Img className="rounded-circle navbarProfile " variant="top" src={contactDetails[0]?.profilepicture} alt="profile pic" />
                        <Card.Title>{contactDetails[0]?.name}</Card.Title>
                        <Card.Subtitle className="text-muted" >{contactDetails[0]?.email}</Card.Subtitle >
                        {neighbourContacts.map((obj, key) => (
                            <ListGroupItem action key={key} className="fs-4 list-group-item list-group-item-action " onClick={() => { handleSelectedContact(obj) }}>
                                {obj.name}
                            </ListGroupItem>
                        ))}
                        <Button variant="danger">Sign out</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}