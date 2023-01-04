// This was creted because it seems like if we have an object and we want to type it's properties using an inteface is better than using the "as type" syntax.
namespace Types {
  export interface Credentials {
    email: string;
    password: string;
  }
}
