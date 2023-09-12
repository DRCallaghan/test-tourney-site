import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {

    let { data: session, status } = useSession();
    console.log({ session, status });
    const pfp = session?.user?.image;
    const username = session?.user?.name;

    if (status === "authenticated") {
        return (
            <>
                <p>Signed in as {username}</p>
                <button onClick={() => signOut()}>Sign out</button>
                <img src={pfp} />
            </>
        )
    }
    return (
        <>
            <p>Not signed in.</p>
            <button onClick={() => signIn("Osu!")}>Sign in</button>
        </>
    )
}