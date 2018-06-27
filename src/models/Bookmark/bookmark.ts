import { Feed } from './../Feed/feed';
import { Md5 } from 'ts-md5';

/**
 * Bookmark
 * 
 * Classe qui sert a modeliser un article mis en favoris 
 *  id: number
 *  feed: Feed
 * 
 */
export class Bookmark{
    public id: string;
    public feed: Feed;
    public dateCreation: Date;

    constructor(feed: Feed) {
        console.log('Bookmark');
        this.feed = feed;
        this.dateCreation = new Date();
        this.id = Md5.hashStr(this.feed.title + this.feed.link).toString();
    }
}