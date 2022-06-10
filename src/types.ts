export interface ConfigType {
    title: string;
    src: string;
    elements: ConfigElementType[]
}

export interface ConfigElementType {
    title: string;
    description: string;
    coord: CoordType;
    url: string;
}

export interface CoordType {
    x: number;
    y: number;
}

