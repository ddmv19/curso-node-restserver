const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = 'No name', apikey } = req.query
  res.json({
    msg: 'get API - Controlador',
    q,
    nombre,
    apikey,
  })
}

const usuariosPut = (req, res = response) => {
  const { id } = req.params
  res.json({
    msg: 'put API - Controlador',
    id,
  })
}

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body
  res.json({
    msg: 'post API - Controlador',
    nombre,
    edad,
  })
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - Controlador',
  })
}

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - Controlador',
  })
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
}
