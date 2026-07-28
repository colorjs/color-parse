/** Parse a color string or 0xRRGGBB number. `space` is absent if input is not parseable. */
export default function parse(color: string | number): {
  space?: 'rgb' | 'hsl' | 'hwb' | 'cmyk' | 'gray' | 'xyz' | 'luv' | 'lab' | 'lch' | 'oklab' | 'oklch' | (string & {});
  values: number[];
  alpha: number;
}
