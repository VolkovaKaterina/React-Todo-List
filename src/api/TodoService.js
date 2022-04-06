import todoApi from './todoApi';

export const get = async () => todoApi.get('/todos');

export const create = (data) => todoApi.post('/todos', data);

export const update = (id, data) => todoApi.put(`/todos/${id}`, data);

export const remove = (id) => todoApi.delete(`/todos/${id}`);
