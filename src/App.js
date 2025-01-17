import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import ContactEdit from "./components/ContactEdit"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])

  const [dataFetched , setDataFetched ] = useState(false)

  

  if (!contacts) {
    console.log("condition triggered")
    // return <div className="loader"></div>
  }


  //TODO: Load all contacts on useEffect when component first renders
  useEffect(() => {
    fetch('http://localhost:4000/contacts')
      .then(response  => response .json())
      .then(data => {
        setContacts(data)
        setDataFecthed(true)
      })
  }, [])
 


  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/">Contacts List</Link></li>
          <li><Link to="/addcontacts">Add New Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
        <Route
          path="/"
          element={<ContactsList contacts={contacts} setContacts={setContacts} dataFetched={dataFetched} setDataFetched={setDataFetched}/>}
        />
        <Route
          path="/addcontacts"
          element={<ContactsAdd contacts={contacts} setContacts={setContacts}/>}
        />
        <Route
          path="/:id"
          element={<ContactsView contacts={contacts} />}
        />
        <Route
          path="/:id/edit"
          element={<ContactEdit contacts={contacts} setContacts={setContacts}/>}
        />
        </Routes>
      </main>
    </>
  )
}
