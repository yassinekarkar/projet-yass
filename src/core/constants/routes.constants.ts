const MAIN = '';

export class RoutesConstants {

  static get main() {
    return {
      signIn: `${MAIN}/sign-in`,
    };
  }

  static get dashboard() {
    return {
      home: `${MAIN}/home`
    };
  }

  static get myClients() {
    return {
      myClients :`${MAIN}/my-clients`,
    };
  }

  static get products() {
    return {
      products :`${MAIN}/products`,
    };
  }

  static get quotes() {
    return {
      quotes :`${MAIN}/quotes`,
    };
  }

  static get bills() {
    return {
      bills :`${MAIN}/bills`,
    };
  }



  static get settings() {
    return {
      settings :`${MAIN}/settings`,
    };
  }

  static get addProduct() {
    return {
      myClients :`${MAIN}/products/add_product`,
    };
  }




}
