import { getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

export const getUsers = async (usersColletionRef) => {
    const data = await getDocs(usersColletionRef);
    const users = data.docs.map(doc => ({...doc.data(), id: doc.id}))
    return users;
}

export const addUser = async(collectionRef, doc) => {
    const docRef = await addDoc(collectionRef, doc);
    return docRef;
}

export const updateUser = async(collectionRef, id, data) => {
    const userDoc = doc(collectionRef, id);
    const docRef = await updateDoc(userDoc, data);
    return docRef;
}

export const deleteUser = async(collectionRef, id) => {
    const userDoc = doc(collectionRef, id);
    const docRef = await deleteDoc(userDoc);
    return docRef;
}