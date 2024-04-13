import React from 'react';
import { DisplayItem } from "../DisplayItem"
import { render , screen } from '@testing-library/react';
import getBoldedText from '../../utils/getBoldedText';


test("DisplayItem base",()=>{
    const { container } = render(<DisplayItem getBoldedText={getBoldedText} inputRef={{ current: { value: "te"}}} option={{label: "test", id: 1}}/>)
    expect(container).toMatchSnapshot();
})

test("DisplayItem last item",()=>{
  const { container } = render(<DisplayItem getBoldedText={getBoldedText} isLast inputRef={{ current: { value: "te"}}} option={{label: "test", id: 1}}/>)
  expect(container).toMatchSnapshot();
})

test("DisplayItem multiple options",()=>{
  const { container } = render(<DisplayItem getBoldedText={getBoldedText} isLast inputRef={{ current: { value: "te"}}} 
  option={{label: "test2", id: 2}}/>)
  expect(container).toMatchSnapshot();
})

test("DisplayItem multiple options last item",()=>{
  const { container } = render(<DisplayItem isLast getBoldedText={getBoldedText} isLast inputRef={{ current: { value: "te"}}} 
  option={{label: "test2", id: 2}}/>)
  expect(container).toMatchSnapshot();
})
