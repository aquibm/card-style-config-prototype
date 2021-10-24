export type Style =
    | string
    | Record<string, string>
    | Array<string | Record<string, string>>;

export type Schema = {
    layout: string;
    sections: Record<string, Section>;
};

export type Section = {
    style?: Style;
    content: string | Record<string, Section>;
};
