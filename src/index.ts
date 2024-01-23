// percolation
import readline from "readline-sync";

const generatePercolation = () => {
  const open: string = "[ ]";
  const close: string = "[X]";
  const n: number = Number(readline.question());
  const grid: string[] = [];

  for (let i = 1; i <= n ** 2; i++) {
    if (isNaN(n)) {
      console.log("Not a number");
      return 0;
    }

    if (Math.random() < 0.593) {
      grid.push(close);
    } else {
      grid.push(open);
    }
  }

  let row = "";
  for (let i = 1; i <= grid.length; i++) {
    row += grid[i - 1];
    if (i % n === 0 && i > 1) {
      console.log(row);
      row = "";
    }
  }
};

generatePercolation();
