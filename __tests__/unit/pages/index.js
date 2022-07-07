/**
 * @jest-environment jsdom
 */

 import React from "react"
 import renderer from "react-test-renderer"

 import IndexPage from "../../../src/pages/index"

 describe("index.js", () => {
   it("renders correctly", () => {
     const tree = renderer.create(<IndexPage />).toJSON()
     expect(tree).toMatchSnapshot()
   })
 })