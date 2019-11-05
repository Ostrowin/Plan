import { Event } from './event.model';
import { Friend } from './friend.model';

export class User {

    private events: Event[];
    private friends: Friend[];

    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date) {
            this.events = [];
            this.friends = [];
        }

    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }

    setEvents(events: Event[]) {
        this.events = events;
    }

    getEvents() {

    }

    setFriends(friends: Friend[]) {
        this.friends = friends;
    }

    getFriends() {

    }
}
