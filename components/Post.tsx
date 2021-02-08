import React, { FunctionComponent } from "react"
import Link from "next/link"

type PostProps = {
   title: String,
   link: String
}


const Post: FunctionComponent<PostProps> = ({ title, link }): JSX.Element => {
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
