import Client from "./Client";
import Item from "./Item";

export default class Order {
    private _client: Client;
    private _item: Item[] = Array();
    private _howToPay: string;
    private _discount: number;

    constructor(
        client: Client,
        item: Item[],
        howToPay: string,
        discount: number,
    ) {
        this._client = client;
        this._item = item;
        this._howToPay = howToPay;
        this._discount = discount;
    }

    get client(): Client {
        return this._client;
    }

    set client(value: Client) {
        this._client = value;
    }

    get item(): Item[] {
        return this._item;
    }

    set item(value: Item[]) {
        if (value.length === 0) {
            throw new Error('Deve haver pelo menos 1 pedido');
        }
    }

    get howToPay(): string {
        return this._howToPay;
    }

    set howToPay(value: string) {
        this._howToPay;
    }

    get discount(): number {
        return this._discount;
    }

    set discount(value: number) {
        if (value < 0) throw new Error('Não existe disconto negativo');
    }

    sumOrder(): number {
        return [...this.item]
        .reduce((prev, curr) => {
            const sumPrice = prev + curr.price;
            return sumPrice;
        }, 0);
    }

    totalDiscount(): number {
        const discountPercentage = 1 - this.discount;
        return this.sumOrder() * discountPercentage;
    }
}