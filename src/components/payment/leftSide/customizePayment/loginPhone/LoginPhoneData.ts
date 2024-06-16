interface CheckBoxLogic {
    id: number;
    text: string;
    name: string;
}

const checkBox:CheckBoxLogic[] = [{
    id: 1,
    text: 'Save this information for next time', 
    name:'Save information' },
{
    id: 2,
    text: 'Text me with news and offers', 
    name: 'add offers'},
];

export {checkBox};