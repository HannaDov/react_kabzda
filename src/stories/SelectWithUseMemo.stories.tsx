import React, {useMemo, useState} from 'react';

import {ComponentStory} from '@storybook/react';


import {Select} from "../Components/Select/Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/SelectUseMemo',

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

}

type ItemsType = {
    value: any
    title: string
    citizens?: number
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const SelectWithValue: ComponentStory<typeof Select> = () => {
    const [newValue, setNewValue] = useState<Array<ItemsType>>([{value: '11', title: 'Minsk', citizens: 150000}, {
        value: '12',
        title: 'Mogilev',
        citizens: 150000
    }, {value: '13', title: 'Tolochin', citizens: 15000}, {value: '21', title: 'Warszawa', citizens: 3000000},
        {value: '22', title: 'Bialostok', citizens: 160000}, {value: '23', title: 'Lodz', citizens: 870000}, {
            value: '31',
            title: 'Berlin',
            citizens: 2050000
        },
        {value: '32', title: 'Gamburg', citizens: 1200000}, {value: '33', title: 'Bonn', citizens: 3000000}])
    let newArray = useMemo(() => {
        console.log("a")
        return newValue.filter(el => el.title.toLowerCase().indexOf('a') > -1)
    }, [newValue])
    let filteredValue = useMemo(() => {
        console.log('filteredValue')
        return newValue.filter(el => el.value[0] === 2)
    }, [newValue])
    let newCitizens = useMemo(() => {
        console.log('newCitizens')
        return newValue.filter(el => el.citizens ? el.citizens >= 1000000 : '')
    }, [newValue])
    return (<span><Select items={filteredValue} onChange={setNewValue} value={newValue}/>
            <Select items={newArray} onChange={setNewValue} value={newValue}/>
            <Select items={newCitizens} onChange={setNewValue} value={newValue}/>
            </span>
    )
}


