import React from 'react'
import Form from "../components/Form";
import AddFieldForm from "../components/AddFieldForm.jsx";
import { useState } from "react";
import { nanoid } from 'nanoid'

const Crud = () => {
    const [fields, setFields] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
  
    const agregarField = (e) => {
      e.preventDefault();
      setFields([
        ...fields,
        {id: nanoid(), name: name, placeholder: "ingrese el texto", type: type },
      ]);
      setName("");
      setType('')
    };
  
    const eliminarfield = (id) => {
      //  console.log(id)
      const arrayFiltrado = fields.filter((item) => item.id !== id);
      setFields(arrayFiltrado);
    };
  return (
    <section className="hero is-fullheight">
    <div className="hero-body is-flex is-align-items-start">
      <div className="container">
        <div>
          <div className="columns">
            <div className="column">
              <Form
                fields={fields}
                setName={setName}
                agregarField={agregarField}
                setType={setType}
                name={name}
                type={type}
                eliminarfield={eliminarfield}
              />
            </div>
            <div className="column">
              <AddFieldForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Crud