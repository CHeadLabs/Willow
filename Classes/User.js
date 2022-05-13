/*
class User
    // Properties
    username
    password
    
    // Constructor
        User(username,password)
    
    // relationships
        0..* UserCreatedAlbums
        1..1 UploadedByUserAlbum

*/

class User {
    // properties
    username;
    password;
    // rels
    userCreatedAlbums;
    uploadedByUserAlbum;
    // constructor
    User(username, password) {
        this.username = username;
        this.password = password;
    }
}