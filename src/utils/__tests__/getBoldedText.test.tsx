import getBoldedText from '../../utils/getBoldedText';


test("getBoldedText base", () => {  
  expect(getBoldedText("hello", "he")).toMatchInlineSnapshot(`
<div
  dangerouslySetInnerHTML={
    Object {
      "__html": "<b>he</b>llo",
    }
  }
/>
`);
})

test("getBoldedText multi parts", () => {  
    expect(getBoldedText("hello this is inside a hall", "ll")).toMatchInlineSnapshot(`
<div
  dangerouslySetInnerHTML={
    Object {
      "__html": "he<b>ll</b>o this is inside a ha<b>ll</b>",
    }
  }
/>
`);
  })