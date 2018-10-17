import { Flux } from '../Flux/flux';
import { Md5 } from 'ts-md5';

export class Feed{
  toLowerCase(): any {
    throw new Error("Method not implemented.");
  }
  remove(arg0: any): any {
    throw new Error("Method not implemented.");
  }
    public id: string;
    public title: string;
    public link: string;
    public description: string;
    public pubDate: Date;
    public thumbnail: string;
    public flux: Flux;

    constructor(title: string, link: string, description: string, pubDate: Date, thumbnail:string, flux: Flux) {
        console.log('Feed');
        this.title = title;
        this.link = link;
        this.description = description;
        this.pubDate = pubDate;
        this.thumbnail = thumbnail;
        this.flux = flux;
        
        this.id = Md5.hashStr(this.pubDate + this.title + this.link + this.description).toString();
    }
}