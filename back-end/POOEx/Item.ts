export default class Item {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
       return this._name;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('Nome muito curto para o seu item!');
        }

        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) {
            throw new Error('O preço deve ser positivo');
        }
    }
}