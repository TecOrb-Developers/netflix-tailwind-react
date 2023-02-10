// cypress/component/NewsLetterSubscription.cy.js file

import { BrowserRouter } from "react-router-dom";
import Layout from "../../src/Layout";
import Banner from "../../src/Component/Home/Banner";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import "../../src/index.css";
import PopularMovies from "../../src/Component/Home/PopularMovies";
describe("popularMovies.cy.js", () => {
  describe("popularMovies.cy.js", () => {
    it("Render Popular Movies component", () => {
      cy.mount(
        <BrowserRouter>
          <Layout>
            <PopularMovies moviesData={[]} />
          </Layout>
        </BrowserRouter>
      ); // mount the component
      cy.get("div").should("have.class", "popular");
    });
    it("fetches Todo items - GET", () => {
      cy.request("http://localhost:3000/home.json").as("movieRequest");
      cy.get("@movieRequest").then((todos) => {
        expect(todos.status).to.eq(200);
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
