class IocContainer {
  private services;

  constructor() {
    this.services = {} as any;
  }

  public service(name: string, cb: any): IocContainer {
    Object.defineProperty(this, name, {
      get: () => {
        if (!Object.prototype.hasOwnProperty.call(this.services, name)) {
          this.services[name] = cb(this);
        }

        return this.services[name];
      },
      configurable: true,
      enumerable: true,
    });

    return this;
  }

  public get(name: string): any {
    return (this as any)[name];
  }
}

export default IocContainer;
