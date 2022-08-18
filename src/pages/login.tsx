import type { NextPage } from "next";
import Head from "next/head";
import Login from "modules/users/authentication/login/Login";

const login: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Log in</title>
                <meta
                    name="description"
                    content="Log in to Sufficiently Advanced Dev"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </div>
    );
};

export default login;
