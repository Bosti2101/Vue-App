var app = new Vue({
  el: "#app",
  data: {
    buttonClicked: false,
    inputString: "",
  },

  methods: {
    splitArray: function (inputString) {
      var a = inputString;
      var lista = a.split(",").map(Number);

      // Rezolvare A

      lista = lista.sort();

      var lista2 = [];

      var ex = lista[0];

      for (i = 1; i <= lista.length; i++) {
        if (Math.floor(lista[i] / 100) != Math.floor(ex / 100)) {
          if (i < lista.length - 1) {
            lista2.push(ex);
          } else if (i == lista.length - 1) {
            lista2.push(ex);

            lista2.push(lista[i]);
          }
        } else if (i == lista.length - 1) {
          lista2.push(lista[i]);
        }

        ex = lista[i];
      }

      // adaugare elemente din lista2 in lista 3

      var lista3 = [];

      for (i = 0; i < lista2.length; i++) {
        lista3.push(lista2[i]);
      }

      // Rezolvare B (modulo26)

      var numsInAlph = [];

      for (i = 0; i <= lista3.length - 1; i++) {
        let s = "",
          t;
        while (lista3[i] > 0) {
          t = (lista3[i] - 1) % 26;
          s = String.fromCharCode(65 + t) + s;
          lista3[i] = ((lista3[i] - t) / 26) | 0;
        }
        numsInAlph.push(s);
      }

      return [lista2, numsInAlph];
    },
  },
});
