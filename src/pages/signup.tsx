import type { NextPage } from "next";
import Head from "next/head";
import Signup from "modules/users/authentication/signup";

const signup: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sign up</title>
                <meta
                    name="description"
                    content="Sign up for Sufficiently Advanced Dev"
                />
                <link rel="icon" href="/favicon.ico" />
                <Signup />
            </Head>
        </>
    );
};

export default signup;
