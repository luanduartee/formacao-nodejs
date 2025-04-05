// Stream: Trabalhar com os dados sem precisar carregar tudo na memória

// Readable Stream: Ler os dados de um arquivo
// Writable Stream: Escrever os dados em um arquivo

// process.stdin
//     .pipe(process.stdout);

import { Readable, Writable } from "node:stream";

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

class MultiplyByTenStream extends Writable {
    multiplier = 10;

    // Chunk: pedaço de infomação a ser lido
    // Encoding: codificação do chunk (utf-8, ascii...)
    // Callback: função que a stream de escrita chama quando terminar de escrever o chunk 
    _write(chunk, encoding, callback) {
        // Só para processar o chunk
        console.log(Number(chunk.toString()) * this.multiplier);
        callback();
    }
}

new OneToHundredStream().pipe(new MultiplyByTenStream());
