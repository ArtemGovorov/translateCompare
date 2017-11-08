import { MyFunctions } from "./myfunctions";

class Startup {
    public static main(): number {
        //console.log('Hello World');
        return MyFunctions.Add(12,34);
    }
}

Startup.main();