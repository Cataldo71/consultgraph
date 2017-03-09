/**
 * Created by cataldp on 3/9/17.
 */

export class User {
    constructor(public email: string, public fname: string, public lname: string,
                public id: number = -1, public tenantid: string = null) {
    }
}