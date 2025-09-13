// js/pruebas_map.js
export const pruebasDisponibles = {
  // ----- AIRE LIBRE -----
  aireLibre: {
    carreras: {
      "50m": {type:"carrera", categorias:["Sub10","Sub12"]},
      "60m": {type:"carrera", categorias:["Sub10","Sub12"]},
      "80m": {type:"carrera", categorias:["Sub14"]},
      "100m": {type:"carrera", categorias:["Sub16","Sub18","Sub20","Sub23","Absoluto"]},
      "200m": {type:"carrera", categorias:["Sub14","Sub18","Sub20","Sub23","Absoluto"]},
      "300m": {type:"carrera", categorias:["Sub16"]},
      "400m": {type:"carrera", categorias:["Sub18","Sub20","Sub23","Absoluto"]},
      "500m": {type:"carrera", categorias:["Sub12","Sub14"]},
      "600m": {type:"carrera", categorias:["Sub16"]},
      "800m": {type:"carrera", categorias:["Sub18","Sub20","Sub23","Absoluto"]},
      "1000m": {type:"carrera", categorias:["Sub12","Sub14","Sub16"]},
      "1500m": {type:"carrera", categorias:["Sub18","Sub20","Sub23","Absoluto"]},
      "2000m": {type:"carrera", categorias:["Sub14","Sub18"]},
      "3000m": {type:"carrera", categorias:["Sub16","Sub18"]},
      "5000m": {type:"carrera", categorias:["Sub20","Sub23","Absoluto"]},
      "10000m": {type:"carrera", categorias:["Sub20","Sub23","Absoluto"]},
      "relevos": {type:"carrera", categorias:["Sub10","Sub12","Sub14","Sub16","Sub18","Sub20","Sub23","Absoluto"]}
    },
    vallas: {
      "60m vallas": {
        type: "vallas",
        params: {
          "Sub10": {H:{altura:0.50, separacion:7, vallas:6}, F:{altura:0.50, separacion:7, vallas:6}},
          "Sub12": {H:{altura:0.60, separacion:7, vallas:6}, F:{altura:0.60, separacion:7, vallas:6}}
        }
      },
      "80m vallas": {
        type:"vallas",
        params:{
          "Sub14": {H:{altura:0.84, separacion:8, vallas:8}, F:{altura:0.76, separacion:8, vallas:8}}
        }
      },
      "100m vallas": {
        type:"vallas",
        params:{
          "Sub16": {H:{altura:0.914, separacion:8.5, vallas:10}, F:{altura:0.762, separacion:8.5, vallas:10}}
        }
      },
      "110m vallas": {
        type:"vallas",
        params:{
          "Sub18": {H:{altura:0.914, separacion:9.14, vallas:10}, F:{altura:0.762, separacion:8.5, vallas:10}},
          "Sub20": {H:{altura:0.991, separacion:9.14, vallas:10}, F:{altura:0.838, separacion:8.5, vallas:10}},
          "Absoluto": {H:{altura:1.067, separacion:9.14, vallas:10}, F:{altura:0.838, separacion:8.5, vallas:10}}
        }
      },
      "300m vallas": {
        type:"vallas",
        params:{
          "Sub16": {H:{altura:0.84, separacion:35, vallas:7}, F:{altura:0.762, separacion:35, vallas:7}}
        }
      },
      "400m vallas": {
        type:"vallas",
        params:{
          "Sub18": {H:{altura:0.84, separacion:35, vallas:10}, F:{altura:0.762, separacion:35, vallas:10}},
          "Sub20": {H:{altura:0.914, separacion:35, vallas:10}, F:{altura:0.762, separacion:35, vallas:10}},
          "Absoluto": {H:{altura:0.914, separacion:35, vallas:10}, F:{altura:0.762, separacion:35, vallas:10}}
        }
      },
      "1500m obstáculos": {
        type:"vallas",
        params:{
          "Sub16": {H:{altura:0.762}, F:{altura:0.762}},
          "Sub18": {H:{altura:0.914}, F:{altura:0.762}},
          "Sub20": {H:{altura:0.914}, F:{altura:0.762}},
          "Absoluto": {H:{altura:0.914}, F:{altura:0.762}}
        }
      },
      "2000m obstáculos": {
        type:"vallas",
        params:{
          "Sub18": {H:{altura:0.914}, F:{altura:0.762}}
        }
      },
      "3000m obstáculos": {
        type:"vallas",
        params:{
          "Sub16": {H:{altura:0.914}, F:{altura:0.762}},
          "Absoluto": {H:{altura:0.914}, F:{altura:0.762}}
        }
      }
    },
    lanzamientos: {
      "peso": {
        type: "lanzamiento",
        weights: {
          "Sub10": {M:2,F:2}, "Sub12": {M:2,F:2}, "Sub14": {M:3,F:3},
          "Sub16": {M:4,F:3}, "Sub18": {M:5,F:3}, "Sub20": {M:6,F:4},
          "Sub23": {M:7.26,F:4}, "Absoluto": {M:7.26,F:4}
        }
      },
      "disco": {
        type:"lanzamiento",
        weights: {
          "Sub14":{M:0.8,F:0.8}, "Sub16":{M:1,F:0.8}, "Sub18":{M:1.5,F:1},
          "Sub20":{M:1.75,F:1}, "Sub23":{M:2,F:1}, "Absoluto":{M:2,F:1}
        }
      },
      "jabalina": {
        type:"lanzamiento",
        weights: {
          "Sub14":{M:0.4,F:0.4}, "Sub16":{M:0.6,F:0.5}, "Sub18":{M:0.7,F:0.5},
          "Sub20":{M:0.8,F:0.6}, "Sub23":{M:0.8,F:0.6}, "Absoluto":{M:0.8,F:0.6}
        }
      },
      "martillo": {
        type:"lanzamiento",
        weights: {
          "Sub14":{M:3,F:3}, "Sub16":{M:4,F:3}, "Sub18":{M:5,F:3},
          "Sub20":{M:6,F:4}, "Sub23":{M:7.26,F:4}, "Absoluto":{M:7.26,F:4}
        }
      }
    },
    saltos: {
      "longitud": {type:"salto"},
      "altura": {type:"salto"},
      "triple": {type:"salto"},
      "pértiga": {type:"salto"}
    }
  },

  // ----- PISTA CUBIERTA -----
  pistaCubierta: {
    carreras: {
      "60m": {type:"carrera", categorias:["Sub16","Sub18","Sub20","Sub23","Absoluto"]},
      "200m": {type:"carrera", categorias:["Sub16","Sub18","Sub20","Sub23","Absoluto"]},
      "400m": {type:"carrera", categorias:["Sub16","Sub18","Sub20","Sub23","Absoluto"]},
      "800m": {type:"carrera", categorias:["Sub16","Sub18","Sub20","Sub23","Absoluto"]},
      "1500m": {type:"carrera", categorias:["Sub16","Sub18","Sub20","Sub23","Absoluto"]},
      "3000m": {type:"carrera", categorias:["Sub16","Sub18","Sub20","Sub23","Absoluto"]},
    },
    vallas: {
      "60m vallas": {
        type:"vallas",
        params:{
          "Sub16":{H:{altura:0.914, salida:13, entre:8, vallas:5}, M:{altura:0.762, salida:13, entre:8, vallas:5}},
          "Sub18":{H:{altura:0.914, salida:13.72, entre:8.5, vallas:5}, M:{altura:0.762, salida:13, entre:8.5, vallas:5}},
          "Sub20":{H:{altura:0.991, salida:13.72, entre:8.5, vallas:5}, M:{altura:0.838, salida:13, entre:8.5, vallas:5}},
          "Absoluto":{H:{altura:1.067, salida:13.72, entre:9.14, vallas:5}, M:{altura:0.838, salida:13, entre:8.5, vallas:5}}
        }
      }
    },
    lanzamientos: {
      "peso": {
        type:"lanzamiento",
        weights: {
          "Sub16":{M:4,F:3}, "Sub18":{M:5,F:3}, "Sub20":{M:6,F:4},
          "Sub23":{M:7.26,F:4}, "Absoluto":{M:7.26,F:4}
        }
      }
    },
    saltos: {
      "longitud": {type:"salto"},
      "altura": {type:"salto"},
      "triple": {type:"salto"},
      "pértiga": {type:"salto"}
    }
  }
};
