// cypress/component/NewsLetterSubscription.cy.js file

import { BrowserRouter } from "react-router-dom";
import Layout from "../../src/Layout";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import "../../src/index.css";
import Promos from "../../src/Component/Home/Promo";
describe("popularMovies.cy.js", () => {
  describe("popularMovies.cy.js", () => {
    it("Render Popular Movies component", () => {
      cy.mount(
        <BrowserRouter>
          <Layout>
            <Promos />
          </Layout>
        </BrowserRouter>
      ); // mount the component
      cy.get("div").should("have.class", "promos");
    });
  });
});
