import React from 'react';
import { ItemsDisplay } from "../ItemsDisplay"
import { render , screen } from '@testing-library/react';


test("ItemsDisplay base",()=>{
    const { container } = render(<ItemsDisplay />)
    expect(container).toMatchSnapshot();
})