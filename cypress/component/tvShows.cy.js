// cypress/component/NewsLetterSubscription.cy.js file

import { BrowserRouter } from "react-router-dom";
import Layout from "../../src/Layout";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../src/index.css";
import TvShows from "../../src/Component/Home/TvShows";
describe("popularMovies.cy.js", () => {
  describe("popularMovies.cy.js", () => {
    it("Render Popular Movies component", () => {
      cy.mount(
        <BrowserRouter>
          <Layout>
            <TvShows moviesData={[]} />
          </Layout>
        </BrowserRouter>
      ); // mount the component
      cy.get("div").should("have.class", "tvShows");
    });
    it("fetches Todo items - GET", () => {
      cy.request("http://localhost:3000/home.json").as("movieRequest");
      cy.get("@movieRequest").then((todos) => {
        expect(todos.status).to.eq(200);
        cy.mount(
          <BrowserRouter>
            <Layout>
              <TvShows moviesData={todos.body.movies} />
            </Layout>
          </BrowserRouter>
        ); // mount the component
      });
    });
  });
});
