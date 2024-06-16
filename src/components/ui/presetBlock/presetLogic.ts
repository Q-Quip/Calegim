interface PresetData {
    bg: string;
    description: Info;
    extraData?: ArrayExtraData[];
    extraBtn?: BtnProps;
    right?: boolean;
}

type ArrayExtraData = {
    src: string;
    alt: string;
    title: string;
    text: string;
};

type BtnProps = {
    color: 'White'|'Black'|'Inherit';
    state: boolean;
    text: string;
};
type Info = {
    title: string;
    text: string[];
    btnUnderline?:string;
};
