import React from "react"
import Link from "next/link"

const Post = ({ title, link }) => {
    return (
        <div className="container">
            <Link href={`/post/${link}`}>
            <h1>{title}</h1>
            </Link>
            <style jsx>{`
                .container {
    background-color: rgb(255, 239, 100);
    border: solid 2px salmon;
    margin-top: 5%;
    margin-left: 30%;
    margin-right: 30%;
    padding: 5%;
}

h1 {
    color: hotpink;
}
            `
            }
            </style>
        </div>
    )
}

export default Post