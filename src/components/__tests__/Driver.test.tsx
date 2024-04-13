import React from 'react';
import { Driver } from "../Driver"
import { render , screen } from '@testing-library/react';


test("Driver base",()=>{
    const { container } = render(<Driver />)
    expect(container).toMatchSnapshot();
})