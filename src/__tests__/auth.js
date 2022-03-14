import {render, screen, act} from '@testing-library/react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import {useAuth, useIsAuthenticated, useUser, useUserUid} from "../auth";
import {ensureTestUser, testUserEmail, testUserPassword} from "../testHelpers";

// eslint-disable-next-line react-hooks/rules-of-hooks
const auth = useAuth();

let user = null


beforeAll(async() => {
    user = await ensureTestUser(auth)
});

beforeEach(async () => {
    await auth.signOut();
})

afterAll(async() => {
    await user.user.delete()
})

test('useAuth shod do not have current user on start', () => {
    expect(auth.currentUser).toBeNull()
})

test('useUserUid should return user uid', async () => {
    function TestComponent() {
        const userUid = useUserUid()
        return <>{userUid?'truthy':'falsy'}</>
    }

    render(<TestComponent />)
    await screen.findByText('truthy')
})

test('useUser should return anonymous user', async () => {
    function TestComponent() {
        const userUid = useUser()
        return <>{userUid?'truthy':'falsy'}</>
    }
    render(<TestComponent />)
    await screen.findByText('truthy')
})

function TestIsAuthenticatedComponent() {
    const isAuthenticated = useIsAuthenticated();
    return <>{isAuthenticated?'truthy':'falsy'}</>
}

test('useIsAuthenticated should return false if user is not logged in', async () => {
    render (<TestIsAuthenticatedComponent />)
    await screen.findByText('falsy')
})

test('useIsAuthenticated should return true if user is logged in', async () => {
    await act(async () => {
        await signInWithEmailAndPassword(auth, testUserEmail, testUserPassword)
    })
    render (<TestIsAuthenticatedComponent />)
    await screen.findByText('truthy')
})
