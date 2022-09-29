import axios from "axios"

const wsURL = "/api/persons"

const create = (newPerson) => {
  return axios.post(wsURL, newPerson).then((response) => response.data)
}

const getAll = () => {
  return axios.get(wsURL).then((response) => response.data)
}

const update = (personId, attributes) => {
  return axios.patch(`${wsURL}/${personId}`, attributes).then((response) => response.data)
}

const remove = (personId) => {
  return axios.delete(`${wsURL}/${personId}`)
}

export default { getAll, create, remove, update }
