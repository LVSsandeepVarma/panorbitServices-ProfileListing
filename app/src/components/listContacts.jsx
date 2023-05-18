import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { savedProfiles, getUserProfile, profilesList } from "../features/profiles/profilesSlice";
import Card from "react-bootstrap/Card"
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useNavigate } from "react-router-dom";

export default function ContactsList(){
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  const profilesData = useSelector(profilesList)
    useEffect(()=>{
        fetch("https://panorbit.in/api/users.json").then(response => {
            return response.json()
          })
          .then(data => {
            console.table(data)
            dispatch(savedProfiles(data?.users)) 
          })
    },[])

    const handleSelectedContact = (obj) =>{
      console.log(obj)
      dispatch(getUserProfile(obj))
      navigate("/contactBio")
      console.log(profilesData)
    }

    return(
        <div className="d-flex justify-content-center">
            <div className="list-group  contactsList" >
            <Card className="h-75">
              <Card.Header className="contactsTitle fw-bold fs-2">Select any Contact</Card.Header>
              <Card.Body className="contactsBody overflow-auto ">
                {profilesData.map((obj, key)=>(
                  <ListGroupItem action  key={key} className="fs-4 list-group-item list-group-item-action " onClick={()=>{handleSelectedContact(obj)}}>
                    {obj.name}
                  </ListGroupItem>  
                ))}
              </Card.Body>
            </Card>
              
            </div>
        </div>
    )
}