export interface Parameter {
  display?: string;
  children?: Parameter[];
  param?: string;
  type?: 'text' | 'number' | 'file' | 'boolean' | 'text[]' | 'select' | string;
  desc?: string;
  default?: string | Object;
  min?: number;
  max?: number;
  decimals?: number;
  dir?: string;
  on?: string;
  off?: string;
  options?: (string | { display: string; value: string })[];
  require?: boolean;
}

export interface Struct {
    name: string;
    fields: Parameter[];
}

export type Params = Parameter[];
export type Structs = Struct[];