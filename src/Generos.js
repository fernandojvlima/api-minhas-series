import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Generos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/genres').then(res => {
      setData(res.data.data)
    })
  }, [])

  const renderizaLinha = item => {
    return (
      <tr key={item.id}>
        <th>{item.id}</th>
        <td>{item.name}</td>
        <td><button type="button" className="btn btn-danger">Delete</button>  <button type="button" class="btn btn-secondary">Editar</button></td>
      </tr>
    )
  }

  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Gêneros</h1>
        <div class="alert alert-warning" role="alert">
          Não existem gêneros cadastrados !
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Gêneros</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>

        <tbody>
          {data.map(renderizaLinha)}
        </tbody>

      </table>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )

}

export default Generos;