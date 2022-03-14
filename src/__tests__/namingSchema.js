/**
 * @jest-environment ./tests/firebase.environment.js
 */
import {english, useOnlineNamingSchemas} from "../namingSchema";
import {doc, setDoc, deleteDoc} from "firebase/firestore";
import {useAuth} from "../auth";
import {useFirestore} from "../firebase";
import {ensureTestUser} from "../testHelpers";
import {randomId} from "../tools";
import {render, screen} from "@testing-library/react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const auth = useAuth();
// eslint-disable-next-line react-hooks/rules-of-hooks
const db = useFirestore()

let user = null;

const docs = [];

beforeAll(async() => {
    user = await ensureTestUser(auth);
    const id1 = randomId();
    const doc1 = doc(db, "glyphNames", id1)
    const id2 = randomId();
    const doc2 = doc(db, "glyphNames", id2)
    await setDoc(doc1, {
        ...english,
        id: id1,
        name: 'translations-1',
        owner: user.user.uid,
    })
    await setDoc(doc2, {
        ...english,
        id: id2,
        name: 'translations-2',
        owner: user.user.uid,
    })
    docs.push(doc1)
    docs.push(doc2)
});

beforeEach(async () => {
})

afterAll(async() => {
    await Promise.all(docs.map(async (doc) => {
        await deleteDoc(doc)
    }))
    await user.user.delete()
})

afterEach(async () => {

})



test('useOnlineNamingSchemas should return glyphnames from collection', async () => {
    function TestComponents() {
        const names = useOnlineNamingSchemas();
        return <>{names.map(({name, id}) => <div key={id}>{name}</div>)}</>
    }

    render( <TestComponents />)

    await screen.findByText('translations-1')
    await screen.findByText('translations-2')
})
