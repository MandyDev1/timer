const arguments = process.argv.slice(2);

for (let i = 0; i < arguments.length; i++) {
  const number = parseInt(arguments[i]);

  if (typeof number === "number" && number >= 0) {
    setTimeout(() => {
      process.stdout.write('.');
    }, number * 1000);
  }
}

setTimeout(() => {
  process.stdout.write('\n');
}, arguments.length * 1000);