import React, { Fragment } from 'react';
import Link from "next/link";

const FirstPostPage = () => {
    return (
        <Fragment>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Fragment>

    );
};

export default FirstPostPage;
