export class Flux{
    public id: number;
    public name: string;
    public link: string;
    public dateCreation: Date;
    static latestId: number = 1;

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    constructor(name: string, link: string, dateCreation: Date) {
        console.log('Flux');
        this.id = Flux.incrementId();
        this.name = name;
        this.link = link;
        this.dateCreation = dateCreation;
    }
}