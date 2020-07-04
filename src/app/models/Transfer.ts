export class Transfer {
    // One-to-Many İlişki Kuramadığımdan transfer yapan customer bilgilerini de tutuyorum.
    transferType: string;
    cSendName: string;
    cSendAccountName: string;
    cSendAccountNumber: number;
    cSendAccountAmount: number;
    cSendAccountCurrency: string;
    cReceiveName: string;
    cReceiveAccountName: string;
    cReceiveAccountNumber: number;
    cReceiveAccountAmount: number;
    amount: number;
    description: string;
    date: string;
}
