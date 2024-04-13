import React from 'react';
import { DisplayItem } from "../DisplayItem"
import { render , screen } from '@testing-library/react';


test("DisplayItem base",()=>{
    const { container } = render(<DisplayItem option={{label: "test", id: 1}}/>)
    expect(container).toMatchSnapshot();
})