import React from 'react'
import {useEffect, useState} from 'react'
import { BiTrash } from 'react-icons/bi';


const ContactForm = () => {

  const [formData, setFormData] = useState(
    {
      name: "",
      phone: "",
      email: ""
    }
  )

  const [contacts, setContacts] = useState([])

  function handleChange(event){
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
    console.log(formData)
  }

  function addContact(event) {
      event.preventDefault()
      if(formData.name === "" || formData.phone === "" || formData.email ==="" ){
        alert("Please fill all the fields!")
        return
      }

      setContacts(prevContacts =>
          [
            ...prevContacts,
            formData
          ]
      )
      setFormData({name: "", phone: "", email: ""})
  }

  function deleteContact(index){
    const listContacts = [...contacts]
    listContacts.splice(index, 1)

    setContacts(prevContacts =>
        [
          ...listContacts
        ])

  }

  return(
    <div className="body">
        <div className="app-title-div">
            <h1 className="app-title h1">Contact Manager</h1>
            <p className="app-title p">save your contacts!</p>
        </div>

      <div className="form-list">
      <div className="form-div">
        <form onSubmit={addContact}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              />

            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <button className="add-btn" onClick={addContact}>Add</button>
        </form>
        </div>

        <div className="list-div">
            {
              contacts.length ?
              contacts.map((contact, index) => {
              return(
                  <div className="list-item" key={index}>
                      <div className="list-item-bin">
                          <div>
                              <h3>{contact.name}</h3>
                              <p>{contact.phone}</p>
                              <p>{contact.email}</p>
                          </div>
                          <BiTrash className="bin-icon" onClick={() => deleteContact(index)}/>
                      </div>
                      <hr/>
                  </div>
              )
            }) : <h4 style={{marginTop:"120px"}}>No contacts found!</h4>
            }
        </div>
      </div>
    </div>
  )
}

export default ContactForm
