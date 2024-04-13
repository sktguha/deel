import React from 'react';
import ErrorBoundary from "../ErrorBoundary"
import { render , screen } from '@testing-library/react';


test("ErrorBoundary base",()=>{
    const { container } = render(<ErrorBoundary />)
    expect(container).toMatchSnapshot();
})