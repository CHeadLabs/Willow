/*
class Album (Abstract)
    properties
        Name
        List of Photos
    constructor
        N/A
    methods

    relationships
*/

class Album {
    // properties
    name;
    photos;

    // constructor
    constructor() {
        if (this.constructor == Album) {
            throw new Error("Abstract class can not be instantiated");
        }
    }
}
