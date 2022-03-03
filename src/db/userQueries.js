import { getDocs, addDoc, updateDoc, doc, deleteDoc, onSnapshot, collection } from "firebase/firestore";

export const getUsers = async (usersColletionRef) => {
    let result = [];
    onSnapshot(usersColletionRef, (doc) => {
        const res =  doc.docs.map(i => ({ ...i.data(), id: i.id }))
        result = res;
    });
    return result;
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


