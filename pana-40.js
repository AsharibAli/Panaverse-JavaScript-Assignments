function make_album(artistName, albumTitle, tracks) {
    return {
        artistName,
        albumTitle,
        tracks
    }
}

console.log(make_album("artist1", "album1"));
console.log(make_album("artist2", "album2"));
console.log(make_album("artist3", "album3", 3));
