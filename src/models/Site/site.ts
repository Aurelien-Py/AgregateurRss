export class Site{
    public sitename: string;
    public url: string;

    constructor(sitename: string, url: string){
        console.log('Site');
        this.sitename = sitename;
        this.url = url;
    }
}