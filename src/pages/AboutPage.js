import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"></PageHero>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice disk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            quibusdam totam vero deserunt. Tempore neque quidem rerum veniam
            eligendi pariatur iste eveniet optio esse, doloribus beatae suscipit
            eaque aspernatur excepturi repellendus odit distinctio, explicabo
            autem deleniti tenetur dolorum accusamus vero totam quaerat. Earum
            quisquam ipsum quasi delectus veniam, tenetur quis? Delectus dolorum
            atque repellendus tenetur, optio maiores. Pariatur temporibus
            dolorum alias architecto facilis blanditiis dolor modi perspiciatis
            corporis beatae, autem minus in dolore debitis cupiditate?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
