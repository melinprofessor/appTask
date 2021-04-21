export default interface Task {
    id: number;
    title: string;
    description: string;
    status: Status;
}

export enum Status{
    NOVO = 'novo',
    PENDENTE = 'pendente',
    CONCLUIDO = 'concluído',
    CANCELADO = 'cancelado'
}