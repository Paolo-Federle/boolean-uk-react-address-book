import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"


function ContactsList(props) {

  //"contacts" must be passed as prop to this component
  const { contacts } = props

  const [contact, setContact] = useState(contacts)

  function handleDeleteContact(id){
    deleteContact(id)
  }

  console.log(contacts)
  function deleteContact(id){
    fetch(`http://localhost:4000/contacts/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => setContact(data))
  }

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
