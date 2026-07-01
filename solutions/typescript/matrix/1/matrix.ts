export class Matrix {
  private readonly _rows: number[][];
  private readonly _columns: number[][];

  constructor(matrix: string) {
    this._rows = matrix
      .split(/\r?\n/).map(row => row.trim()
        .split(/\s+/).map(Number));
    this._columns = this.transpose(this._rows);
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }

  private transpose(rows: readonly number[][]): number[][] {
    const columns: number[][] = [];
    for (let i = 0; i < rows[0]?.length; i++) {
      columns.push([]);
      for (const row of rows) {
        columns[i].push(row[i]);
      }
    }

    return columns;
  }
}
