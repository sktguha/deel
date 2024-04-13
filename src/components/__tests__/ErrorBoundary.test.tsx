import React from 'react';
import ErrorBoundary from "../ErrorBoundary"
import { render , screen } from '@testing-library/react';


test("ErrorBoundary base",()=>{
    const { container } = render(<ErrorBoundary />)
    expect(container).toMatchSnapshot();
})

test("ErrorBoundary error component",()=>{
  const Component = ()=>{
    throw new Error("test error");
    return <div>Test Component</div>
  }
  const { container } = render(<ErrorBoundary><Component /></ErrorBoundary>)
  expect(container).toMatchSnapshot();
})