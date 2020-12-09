import Artist from "../components/Artist/Artist";

const clientId = '1552527e4fb6490facd4fd8f368a6205';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken){
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl =  `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=user-top-read&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    async getTopTracks() {
        const accessToken = Spotify.getAccessToken();
        let type = 'artists';
        let artistData = [];
        let timeRange = '';
        
        for (let u = 0; u < 2; u ++){

        switch (u){
            case 0 :
                type = 'artists'
                break;
            case 1 :
                type = 'tracks'
                break;
            default :
                return;
        }
            for (let i = 0; i < 3; i++) {
        
                switch (i){
                    case 0 :
                        timeRange = 'long_term';
                        break;
                    case 1 :
                        timeRange = 'medium_term';
                        break;
                    case 2 :
                        timeRange = 'short_term';
                        break;
                    default :
                        return;
                }

            await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=50`, 
                { headers : {
                    Authorization : `Bearer ${accessToken}`
                } }).then(response => {
                    return response.json();
                }).then(jsonResponse => {
                    // console.log(jsonResponse);
                    if(jsonResponse.items <= 0){
                        return;
                    }
                    if (jsonResponse.items[0].type === 'artist'){
                        artistData.push(jsonResponse.items.map( artist => ({
                            name: artist.name,
                            rank: null,
                            href: artist.href,
                            genres: artist.genres.slice(0, 4)
                                .map(genre => genre[0].toUpperCase() + genre.substr(1))
                                .join(' • '),
                            genresRaw: artist.genres,
                            followers: artist.followers.total,
                            popularity: artist.popularity,
                            type: artist.type,
                            images: artist.images,
                            uri: artist.uri,
                            artistURL: artist.external_urls.spotify
                    })));} else if (jsonResponse.items[0].type === 'track'){
                        artistData.push(jsonResponse.items.map( track => ({
                            name: track.name,
                            artists: track.artists,
                            albumName: track.album.name,
                            releaseYear: track.album.release_date.slice(0, 4),
                            rank: null,
                            id: track.id,
                            href: track.href,
                            popularity: track.popularity,
                            type: track.type,
                            images: track.album.images,
                            uri: track.uri,
                            trackURL: track.external_urls.spotify,
                            albumURL: track.album.external_urls.spotify,
                            previewURL: track.preview_url
                    })))
                    };
            });
        }
    }
        return artistData;
    }
}

export default Spotify;