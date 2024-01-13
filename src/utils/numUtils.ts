export const comPactNumberFormat = (number?: number) => {
     const formatter = Intl.NumberFormat('en', {
          notation: 'compact',
          compactDisplay: 'short',
     });
     return formatter.format(number || 0);
};
