export type GetOptionalType<T> = T extends { [key: string]: infer U }
  ? U
  : never;
