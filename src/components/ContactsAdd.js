import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {


  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { setContacts, contacts } = props
  const navigate = useNavigate()

  //TODO: Implement controlled form
  //send POST to json server on form submit

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [email, setEmail] = useState()
  const [linkedIn, setLinkedIn] = useState()
  const [twitter, setTwitter] = useState()


  function handleFirstName(event) {
    // console.log(event.target.value)
    setFirstName(event.target.value)
  }

  function handleLastName(event){
    // console.log(event.target.value)
    setLastName(event.target.value)
    // console.log(lastName)
  }

  function handleStreet(event){
    // console.log(event.target.value)
    setStreet(event.target.value)
    // console.log(street)
  }

  function handleCity(event){
    // console.log(event.target.value)
    setCity(event.target.value)
    // console.log(city)
  }

  function handleEmail(event){
    setEmail(event.target.value)
  }

  function handleLinkedIn(event){
    // console.log(event.target.value)
    setLinkedIn(event.target.value)
  }
  // console.log("linkedin is: ", linkedIn)

  function handleTwitter(event){
    setTwitter(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newContact = {
      firstName: firstName,
    lastName: lastName,
    street: street,
    city: city,
    email: email,
    linkedin: linkedIn,
    twitter: twitter,
    }
    // console.log(newContact)
    const res = await fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact)
    })
    const data = await res.json()
    setContacts([...contacts, data])
    navigate('/')
  }

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" onChange={handleFirstName} required />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" onChange={handleLastName} required />

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" onChange={handleStreet} required />

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" onChange={handleCity} required />

      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="text" onChange={handleEmail} required />

      <label htmlFor="linkedin">LinkedIn:</label>
      <input id="linkedin" name="linkedin" type="text" onChange={handleLinkedIn} required />

      <label htmlFor="twitter">Twitter:</label>
      <input id="twitter" name="twitter" type="text" onChange={handleTwitter} required />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd
