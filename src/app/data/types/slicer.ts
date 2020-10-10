export class Slicer<T> {
  private _actualPage: number;
  private _slicerCount: number;
  private _itens: T[];
  private _slicedItens: T[];

  constructor(itens: T[], slicerCount: number = 6) {
    this._itens = itens;
    this._slicerCount = slicerCount;
    this._slicedItens = this._itens?.slice(0, slicerCount);
    this._actualPage = 0;
  }

  get itens(): T[] {
    return this._itens;
  }

  get slicedItens(): T[] {
    return this._slicedItens;
  }

  private get endSlice() {
    return this._actualPage + this._slicerCount;
  }

  get thereIsMore() {
    return this.endSlice >= this._itens?.length;
  }

  showMore() {
    this._actualPage += this._slicerCount;
    this._slicedItens = this._slicedItens.concat(
      this._itens?.slice(this._actualPage, this.endSlice)
    );
  }

  clear() {
    this._actualPage = 0;
  }
}
