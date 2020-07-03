import { Transfer } from '../../models/Transfer';
import { Account } from '../../models/Account';
import { Customer } from '../../models/Customer';
import Dexie from 'dexie';

export class BankApplicationDB extends Dexie {
    public customers: Dexie.Table<Customer, number>;
    public accounts: Dexie.Table<Account, number>;
    public transfers: Dexie.Table<Transfer, number>;

    constructor() {
        super('BankApplicationDB');
        const db = this;

        // Define tables and indexes
        db.version(1).stores({
            customers: '++id,&username,password',
            accounts:
                '++id,customerName,accountName,&accountNumber,amount,currency,rate,date',
            transfers:
                '++id,customerName,customerSend,customerReceive,amount,description',
        });

        // Let's physically map Contact class to contacts table.
        // This will make it possible to call loadEmailsAndPhones()
        // directly on retrieved database objects.
        db.customers.mapToClass(Customer);
        db.accounts.mapToClass(Account);
        db.transfers.mapToClass(Transfer);
    }
}

export var database = new BankApplicationDB();
