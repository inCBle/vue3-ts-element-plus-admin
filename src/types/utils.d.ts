type ObjToKeyValArray<T> = {
  [K in keyof T]: [k, T[K]];
}[keyof T];
