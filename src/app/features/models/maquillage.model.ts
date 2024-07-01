export class Maquillage {
    public category: string;
    public name: string;
    public prix: number;

    constructor(category: string, name: string, prix: number) {
        this.category = category;
        this.name = name;
        this.prix = prix;
    }
}