// numbroConfig.ts
import numbro from 'numbro';

numbro.registerLanguage({
  languageTag: "pt-BR",
  delimiters: {
    thousands: ".",
    decimal: ","
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t"
  },
  ordinal: (number) => {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "R$",
    position: "prefix",
    code: "REL"
  },
  formats: {
    fourDigits: {
      totalLength: 4,
      spaceSeparated: true,
      average: true
    },
    fullWithTwoDecimals: {
      output: "currency",
      mantissa: 2,
      spaceSeparated: true,
      thousandSeparated: true
    },
    fullWithTwoDecimalsNoCurrency: {
      mantissa: 2,
      thousandSeparated: true
    },
    fullWithNoDecimals: {
      output: "currency",
      spaceSeparated: true,
      thousandSeparated: true,
      mantissa: 0
    }
  }
});

numbro.setLanguage("pt-BR");

export default numbro; // Opcional, caso precise importar o numbro configurado