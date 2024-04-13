import React from 'react';
import { ItemsDisplay } from "../ItemsDisplay"
import { render , screen } from '@testing-library/react';
import getBoldedText from '../../utils/getBoldedText';


test("ItemsDisplay base",()=>{
    const { container } = render(<ItemsDisplay getBoldedText={getBoldedText} inputRef={{ current: { value: "te"}}} availableOptions={[{id:1, label: "test"}]}/>)
    expect(container).toMatchSnapshot();
})