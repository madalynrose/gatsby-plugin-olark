import { onRenderBody } from "../gatsby-ssr"

describe(`gatsby-plugin-olark`, () => {
  describe(`onRenderBody`, () => {
    it(`sets the correct head components`, () => {
      const setPostBodyComponents = jest.fn()
      const pluginOptions = { olarkSiteID: `TEST_ID` }

      onRenderBody({ setPostBodyComponents }, pluginOptions)

      expect(setPostBodyComponents.mock.calls).toMatchSnapshot()
    })
  })
})
