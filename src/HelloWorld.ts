import * as mf from "./myfunctions";

class Startup {
  public static main(): number {
    const result: number = mf.Add(12, 34);
    const r2: number = mf.Subtract(23, 23);
    return mf.Add(r2, result);
  }
}

Startup.main();
