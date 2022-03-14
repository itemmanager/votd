import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export const testUserEmail = "jon.doe@gmail"
export const testUserPassword = "foo-bar"

export async function ensureTestUser(auth) {
    try {
        return await createUserWithEmailAndPassword(auth, testUserEmail, testUserPassword)
    } catch {
        return await signInWithEmailAndPassword(auth, testUserEmail, testUserPassword)
    }
}
