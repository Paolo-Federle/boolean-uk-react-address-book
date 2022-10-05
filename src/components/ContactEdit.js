import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function ContactEdit(props) {

  // const [contact, setContact] = useState()
  // const { setContacts } = props;
  
  // const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      const { contact } = location.state;
      setFirstName(contact.firstName)
      setLastName(contact.lastName)
      setStreet(contact.street)
      setCity(contact.city)
      setEmail(contact.email)
      setLinkedIn(contact.linkedin)
      setTwitter(contact.twitter)
      setId(contact.id)
      // setContact(contact);
    }
  }, [location]);

  // if (!contact) {
  //   return <p>Loading</p>;
  // }

  // console.log("contact is: ", contact)

  // THIS PART BREAK THE CODE
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [email, setEmail] = useState("")
  const [linkedIn, setLinkedIn] = useState("")
  const [twitter, setTwitter] = useState("")
  const [id, setId] = useState("")

  console.log("id è ", id)
  function handleFirstName(event) {
    console.log(event.target.value)
    setFirstName(event.target.value)
  }

  function handleLastName(event) {
    console.log(event.target.value)
    setLastName(event.target.value)
    console.log(lastName)
  }

  function handleStreet(event) {
    console.log(event.target.value)
    setStreet(event.target.value)
    console.log(street)
  }

  function handleCity(event) {
    console.log(event.target.value)
    setCity(event.target.value)
    console.log(city)
  }

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handleLinkedIn(event) {
    // console.log(event.target.value)
    setLinkedIn(event.target.value)
  }
  // console.log("linkedin is: ", linkedIn)

  function handleTwitter(event) {
    setTwitter(event.target.value)
  }

  console.log("location.state: ", location.state)

  const handleSubmit = async (event) => {
    event.preventDefault()
  //   const newContact = {
      
  //   }
  //   // console.log(newContact)
    const res = await fetch(`http://localhost:4000/contacts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      // / Fields that to be updated are passed
      body: JSON.stringify({
        firstName: firstName,
      })
    })
    const data = await res.json()
    console.log("data is: ", data)
    console.log("contacts is: ", contacts)
  //   setContacts([...contacts, data])
  //   navigate('/')
  }

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" value={firstName} name="firstName" type="text" onChange={handleFirstName} required />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" value={lastName} name="lastName" type="text" onChange={handleLastName} required />

      <label htmlFor="street">Street:</label>
      <input id="street" value={street} name="street" type="text" onChange={handleStreet} required />

      <label htmlFor="city">City:</label>
      <input id="city" value={city} name="city" type="text" onChange={handleCity} required />

      <label htmlFor="email">Email:</label>
      <input id="email" value={email} name="email" type="text" onChange={handleEmail} required />

      <label htmlFor="linkedin">LinkedIn:</label>
      <input id="linkedin" value={linkedIn} name="linkedin" type="text" onChange={handleLinkedIn} required />

      <label htmlFor="twitter">Twitter:</label>
      <input id="twitter" value={twitter} name="twitter" type="text" onChange={handleTwitter} required />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactEdit
