import React, { useState } from 'react';

const NovoGenero = () => {
  return (
    <div className="container">
      <h1>Novo Gênero</h1>
      <form>
        <div className="form-group">
          <label>Nome</label>
          <input type="text" className="form-control" id="name" placeholder="Digite o nome" />
        </div>
        <button type="button" className="btn btn-primary">Salvar1</button>
      </form>
    </div>
  )
}

export default NovoGenero;