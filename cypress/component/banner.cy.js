// cypress/component/NewsLetterSubscription.cy.js file

import { BrowserRouter, useRoutes } from "react-router-dom";
import Layout from "../../src/Layout";
import Banner from "../../src/Component/Home/Banner";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import "../../src/index.css";
describe("banner.cy.js", () => {
  describe("banner.cy.js", () => {
    it("Render Banner component", () => {
      cy.mount(
        <BrowserRouter>
          <Layout>
            <Banner moviesData={[]} />
          </Layout>
        </BrowserRouter>
      ); // mount the component
      cy.get("[data-cy=Banner]");
    });
    it("fetches Todo items - GET", () => {
      cy.request("http://localhost:3000/home.json").as("movieRequest");
      cy.get("@movieRequest").then((todos) => {
        expect(todos.status).to.eq(200);
        console.log("Todos Response is an array", todos.body.movies);
        // assert.isArray(todos, "Todos Response is an array");
        cy.mount(
          <BrowserRouter>
            <Layout>
              <Banner moviesData={todos.body.movies} />
            </Layout>
          </BrowserRouter>
        ); // mount the component
      });
    });
  });
});
