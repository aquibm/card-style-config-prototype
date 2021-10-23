export type Schema = {
  layout: string;
  sections: Record<string, Section>;
};

export type Section = {
  style?: Record<string, string>;
  content: string | Record<string, Section>;
};
