import React from 'react';
import { AutoComplete } from "../../types/AutoComplete"
import { render , screen } from '@testing-library/react';


test("Autocomplete base",()=>{
    const { container } = render(<AutoComplete />)
    expect(container).toMatchSnapshot();
})

test("Autocomplete single prop",()=>{
    const { container } = render(<AutoComplete single/>)
    expect(container).toMatchSnapshot();
  })
  
  test("Autocomplete required",()=>{
    const { container } = render(<AutoComplete errorText={"this is a required field"}/>)
    expect(container).toMatchSnapshot();
  })
  
  test("Autocomplete errorText",()=>{
    const { container } = render(<AutoComplete errorText={"custom errorText for test"}/>)
    expect(container).toMatchSnapshot();
  })