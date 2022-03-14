import {useAnalytics, useFirestore} from "./firebase";

test("useAnalytics will return analytics", () => {
    const analytics = useAnalytics()
    expect(analytics).toBeTruthy()
})

test("useFirestore should return same instane", () => {
    const f1 = useFirestore();
    const f2 = useFirestore();
    expect(f1).toBe(f2)
})
