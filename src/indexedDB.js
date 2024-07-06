import {openDB} from 'idb';

const DB_Name = 'todos-database';
const STORE_Name = 'todos-store';

export const initDB = async () => {
    return openDB(DB_Name, 1,{
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_Name)) {
                db.createObjectStore(STORE_Name, { keyPath: 'id', autoIncrement:true});
            }
        }
    });
};

export const addTodo = async (todo) => {
    const db = await initDB();
    return db.add(STORE_Name, todo);
}

export const updateTodo = async (id, updateTodo) => {
    const db = await initDB();
    return db.put(STORE_Name, { ...updateTodo, id })
}

export const deleteTodos = async (id) => {
    const db = await initDB();
    return db.delete(STORE_Name, id);
}

export const getTodos = async () => {
    const db = await initDB();
    return db.getAll(STORE_Name);
}