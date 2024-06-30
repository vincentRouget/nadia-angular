export class Visage {
    category: string;
    name: string;
    detail: string;
    prix: number;

    constructor(category: string, name: string, detail: string, prix: number) {
        this.category = category;
        this.name = name;
        this.detail = detail;
        this.prix = prix;
    }
}