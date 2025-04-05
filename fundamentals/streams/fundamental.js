// Stream: Trabalhar com os dados sem precisar carregar tudo na memória

// Readable Stream: Ler os dados de um arquivo
// Writable Stream: Escrever os dados em um arquivo

// process.stdin
//     .pipe(process.stdout);

import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  // Stream de leitura, servindo para fornecer informações
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf + "\n");
      }
    }, 1000);
  }
}

new OneToHundredStream().pipe(process.stdout);
