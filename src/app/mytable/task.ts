export class Task {

    id: number;
    name: string;
    status: boolean;

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = false;
    }
}