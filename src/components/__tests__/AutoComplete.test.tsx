import React from 'react';
import { AutoComplete } from "../AutoComplete"
import { render , screen } from '@testing-library/react';


test("Autocomplete base",()=>{
    const { container } = render(<AutoComplete />)
    expect(container).toMatchSnapshot();
})