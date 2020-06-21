import Dexie from 'dexie';

export class BankApplicationDatabase extends Dexie {
    customers: Dexie.Table<Customer, number>;
    accounts: Dexie.Table<Account, number>;

    constructor() {
        super('BankApplicationDatabase');
        this.version(1).stores({
            customers: '++id,&username,password',
            accounts: '++id,name,amount,currency',
        });
    }
}
interface Customer {
    id?: number;
    username: string;
    password: string;
}
interface Account {
    id?: number;
    name: string;
    amount: number;
    currency: string;
}

export var database = new BankApplicationDatabase();
