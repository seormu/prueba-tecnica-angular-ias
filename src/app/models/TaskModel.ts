export interface TaskModel {
    limit: number;
    skip: number;
    total: number;
    todos: Todos[];
}

export interface Todos {
    id: string;
    todo: string;
    completed: boolean;
    userId: string;
}