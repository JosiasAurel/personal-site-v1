import React, { FunctionComponent } from "react"
import Link from "next/link"

type PostProps = {
    title: string,
    link: string
}

const Post: FunctionComponent<PostProps> = ({title, link}: PostProps): JSX.Element => {
    return (
        <div className="container">
            <Link href={`/post/$link}`}>
            <h1>{title}</h1>
            </Link>
            <style jsx>{`
                .container {
    background-color: transparent;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    padding: 1%;
}

.container:hover {
    background-color: #14ffe93d;
    border-radius: 8px;
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
