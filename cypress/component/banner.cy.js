// cypress/component/NewsLetterSubscription.cy.js file

import { BrowserRouter, useRoutes } from "react-router-dom";
import Layout from "../../src/Layout";
import Banner from "../../src/Component/Home/Banner";
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
      cy.get("div").should("have.class", "sss");
    });
    it("Api Hitting", () => {
      cy.mount(
        <BrowserRouter>
          <Layout>
            <Banner moviesData={[]} />
          </Layout>
        </BrowserRouter>
      ); // mount the component
      cy.intercept({
        method: "POST",
        url: "http://localhost:8080/home.json",
      }).as("apiCheck");

      // cy.visit("/");
      cy.wait("@apiCheck").then((interception) => {
        assert.isNotNull(interception.response.body, "1st API call has data");
      });
      cy.wait("@apiCheck").then((interception) => {
        assert.isNotNull(interception.response.body, "2nd API call has data");
      });

      cy.wait("@apiCheck").then((interception) => {
        assert.isNotNull(interception.response.body, "3rd API call has data");
      });
    });
    // it("test newsletter subscription", () => {
    //   cy.mount(<App />); // mount the component
    //   cy.get('[data-test="email-input"]').type("test@gmail.com"); // Type email
    //   cy.get('[data-test="submit-button"]').click(); // Click on submit button
    //   cy.get('[data-test="success-message"]')
    //     .should("exist")
    //     .contains("Thank you for subscribing to our newsletter"); // Check if success message is displayed
    // });
  });
});
