export interface Treatment {
  drug: number | string | undefined;
  repeat: number[] | string[];
  duration: number | string;
}
