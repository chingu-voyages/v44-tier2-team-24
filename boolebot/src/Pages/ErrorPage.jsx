import React from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Layout/Container";

export default function ErrorPage(){
    return <div className="error_main">
        <Container>
        <section className="error_content">
        <h1>Opps! Something went wrong!!!</h1>

        <p>Click here to go back to <Link to="/" className="home_btn">HOME</Link> page</p>
        </section>
        </Container>
    </div>
}