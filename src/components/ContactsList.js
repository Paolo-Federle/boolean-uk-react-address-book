import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"


function ContactsList(props) {

  const { setContacts, contacts } = props



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
                  <button>View</button>
                </Link> 
                <Link
                  state={{ contact}}
                  to={`/${contact.id}/edit`}>
                    <button>Edit</button>
                </Link>
                <Link
                  state={{ contacts }}
                  to={`/`}
                  onClick={() => deleteContact(contact.id)}>
                   <button>Delete</button>
                </Link>
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList
