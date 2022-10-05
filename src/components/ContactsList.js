import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"


function ContactsList(props) {

  //"contacts" must be passed as prop to this component
  const { setContacts, contacts } = props

  // const [oneContact, setContact] = useState(contacts)

  // console.log("contacts is", contacts)
  // console.log("contact is", oneContact)

  function handleDeleteContact(id){
    deleteContact(id)
    // getNewContact()
  }

  console.log("contacts is: ", contacts)
  function deleteContact(id){
    fetch(`http://localhost:4000/contacts/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
        fetch(`http://localhost:4000/contacts`)
          .then(response => response.json())
          .then(data => setContacts(data)
    )})
  }

  // function getNewContact(){
  //   fetch('http://localhost:4000/contacts')
  //     .then(response  => response .json())
  //     .then(data => {
  //       console.log("my newdata is: ", data)
  //       setContacts(data)
  //     })
  // }

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName } = contact
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName}
              </p>
              <p>
                { /** TODO: Make a Link here to view contact */}
                <Link
                  state={{ contact }}
                  to={`/${contact.id}`}>
                  View
                </Link> / 
                <Link
                  state={{ contact }}
                  to={`/${contact.id}`}>
                    Edit
                </Link>
                 <span onClick={() => handleDeleteContact(contact.id)}>/ Delete</span>
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList
