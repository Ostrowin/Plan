export class Event {

    constructor(
        title: string,
        start: Date,
        id?: string,
        groupId?: string,
        allDay?: boolean,
        end?: Date,
        url?: string,   // String. A URL that will be visited when this event is clicked by the user.
                        // For more information on controlling this behavior, see the eventClick callback.
        className?: string[],
    ) { }

}
