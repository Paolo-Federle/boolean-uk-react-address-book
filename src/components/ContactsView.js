import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"

function ContactsView(props) {
  const { contacts } = props

  // const { contact.id } = useParams()
  const [contact, setContact] = useState(false)

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state
  
  console.log("my contact is:", contact)
  const location = useLocation()

  

  useEffect(() => {
    if (location.state) {
      const { contact } = location.state
      setContact(contact)
    }
  }, [location])

    // console.log("my contacts is", contacts)

  if (!contact) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Città: {contact.street} {contact.city}</p>
      <p>Email: {contact.email}</p>
      <p>LinkedIn: {contact.linkedin}</p>
      <p>Twitter: {contact.twitter}</p>
    </div>
  )
}

export default ContactsView