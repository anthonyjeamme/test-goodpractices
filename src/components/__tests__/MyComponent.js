import React from "react"
import renderer from "react-test-renderer"
import MyComponent from "../MyComponent.tsx"

describe("Header", () => {
  it("renders correctly A", () => {
    const tree = renderer
      .create(<MyComponent data={{ name: "tony" }} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders correctly B", () => {
    const tree = renderer.create(<MyComponent />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
