import { getDocs } from "firebase/firestore";

export const getUsers = async (usersColletionRef) => {
    const data = await getDocs(usersColletionRef);
    const users = data.docs.map(doc => ({...doc.data(), id: doc.id}))
    return users;
}