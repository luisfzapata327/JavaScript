const PRONOSTICO_LOCAL = {
  "ayer": {
    minima: 61,
    maxima: 75
  },
  "hoy": {
    minima: 64,
    maxima: 77
  },
  "mañana": {
    minima: 68,
    maxima: 80
  } 
}

const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;

console.log(minimaHoy, maximaHoy);