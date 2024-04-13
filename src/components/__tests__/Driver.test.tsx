import React from 'react';
import { Driver } from "../Driver"
import { render , screen } from '@testing-library/react';


test("Driver base",()=>{
    const { container } = render(<Driver />)
    expect(container).toMatchSnapshot();
})

test("Driver single prop",()=>{
  const { container } = render(<Driver single/>)
  expect(container).toMatchSnapshot();
})

test("Driver required",()=>{
  const { container } = render(<Driver required/>)
  expect(container).toMatchSnapshot();
})

test("Driver errorText",()=>{
  const { container } = render(<Driver errorTextProp={"custom errorText for test"}/>)
  expect(container).toMatchSnapshot();
})