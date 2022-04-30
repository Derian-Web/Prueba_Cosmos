import React from "react";

const Form = ({
  fields,
  setName,
  agregarField,
  setType,
  name,
  type,
  eliminarfield,
}) => {
  return (
    <>
      <h1 className="is-size-3">Fomulario</h1>
      <form onSubmit={agregarField}>
        <div class="field">
          <label class="label">Ingrese el nombre del campo</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Ingrese el tipo de campo</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </div>
        </div>
        <button class="button is-success">Agregar</button>
      </form>

      <h2 className="mt-3 is-size-3">Campos Agregados</h2>

      {fields.map((item) => (
        <div class="field" key={item.id}>
          <label class="label">{item.name}</label>
          <div class="control">
            <input class="input" type={item.type} placeholder="Text input" />
          </div>
          <button
            className="button is-danger mt-1"
            onClick={() => eliminarfield(item.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
};

export default Form;
