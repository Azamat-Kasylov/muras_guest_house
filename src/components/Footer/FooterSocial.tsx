/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { socialsData } from "../../data";
import { lazy, Suspense } from "react";

const Certificates = lazy(() => import("./Certificates"));

const FooterSocial: React.FC = () => {
  return (
    <Socials>
      <h3 className="f_social-title">Certificates</h3>
      <Suspense fallback={<p>Loading...</p>}>
        <Certificates />
      </Suspense>
      <div className="flex_row">
        {socialsData.map((i) => (
          <a target="_blank" rel="noreferrer" href={i.href} key={i.href}>
            {i.social}
          </a>
        ))}
      </div>
    </Socials>
  );
};

const Socials = styled.div`
  padding-top: 20px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  .f_social-title {
    text-transform: uppercase;
    color: #7e7367;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
  }

  .flex_row {
    display: flex;
    gap: 1rem;
  }

  a {
    color: #7e7367;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
    grid-column: 1 / -1;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 30px;
  }
`;

export default FooterSocial;
