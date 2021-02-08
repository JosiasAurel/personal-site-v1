import React, { FunctionComponent } from "react"
import Link from "next/link"

const Post: FunctionComponent = (props: { title: String, link: String }): JSX.Element => {
    const { title, link } = props;
    return (
        <div className="container">
            <Link href={`/post/${link}`}>
            <h1>{title}</h1>
            </Link>
            <style jsx>{`
                .container {
    background-color: transparent;
    margin-top: 5%;
    margin-left: 30%;
    margin-right: 30%;
    padding: 1%;
}

h1 {
    color: black;
}

@media screen and (max-width: 480px) {
	.container {
		margin-left: 10% ;
		margin-right: 10%;
	}
}
            `
            }
            </style>
        </div>
    )
}

export default Post
