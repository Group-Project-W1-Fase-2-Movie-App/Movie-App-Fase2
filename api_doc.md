### GET /moviePopular

> Get popular movie list

_Request Header_
```
{
  "access_token" : "<access_token>"
}
```

_Request Body_
```
not needed
```

* Success Response 

_Response (200 - OK)_
```
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
            "genre_ids": [
                28,
                35,
                10751
            ],
            "id": 587807,
            "original_language": "en",
            "original_title": "Tom & Jerry",
            "overview": "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
            "popularity": 4213.261,
            "poster_path": "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
            "release_date": "2021-02-12",
            "title": "Tom & Jerry",
            "video": false,
            "vote_average": 8,
            "vote_count": 581
        },
}
```

* Error Response

_Response (500 - Internal Server Error)_
```
{
  message: internal server error
  isHandled: false
}
```

### GET /movieNew

> Get new movie list

_Request Header_
```
{
  "access_token" : "<access_token>"
}
```

_Request Body_
```
not needed
```

* Success Response 

_Response (200 - OK)_
```
{
    "dates": {
        "maximum": "2021-03-30",
        "minimum": "2021-03-11"
    },
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 458576,
            "original_language": "en",
            "original_title": "Monster Hunter",
            "overview": "A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",
            "popularity": 2985.832,
            "poster_path": "/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
            "release_date": "2020-12-03",
            "title": "Monster Hunter",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 936
        },
}
```

* Error Response

_Response (500 - Internal Server Error)_
```
{
  message: internal server error
  isHandled: false
}
```

### GET /movieToprated

> Get popular movie list

_Request Header_
```
{
  "access_token" : "<access_token>"
}
```

_Request Body_
```
not needed
```

* Success Response 

_Response (200 - OK)_
```
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
            "genre_ids": [
                10749,
                35
            ],
            "id": 761053,
            "original_language": "en",
            "original_title": "Gabriel's Inferno Part III",
            "overview": "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
            "popularity": 30.881,
            "poster_path": "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
            "release_date": "2020-11-19",
            "title": "Gabriel's Inferno Part III",
            "video": false,
            "vote_average": 8.8,
            "vote_count": 734
        },
}
```

* Error Response

_Response (500 - Internal Server Error)_
```
{
  message: internal server error
  isHandled: false
}
```

### GET /movieTrending

> Get popular movie list

_Request Header_
```
{
  "access_token" : "<access_token>"
}
```

_Request Body_
```
not needed
```

* Success Response 

_Response (200 - OK)_
```
{
    "page": 1,
    "results": [
        {
            "video": false,
            "vote_average": 8,
            "overview": "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
            "release_date": "2021-02-12",
            "adult": false,
            "backdrop_path": "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
            "vote_count": 581,
            "genre_ids": [
                28,
                35,
                10751
            ],
            "id": 587807,
            "original_language": "en",
            "original_title": "Tom & Jerry",
            "poster_path": "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
            "title": "Tom & Jerry",
            "popularity": 4213.261,
            "media_type": "movie"
        },
}
```

* Error Response

_Response (500 - Internal Server Error)_
```
{
  message: internal server error
  isHandled: false
}
```

### GET /movieDetails/:id

> Get popular movie list

_Request Header_
```
{
  "access_token" : "<access_token>"
}
```

_Request Param_
```
{
  "id" : "<id>"
}
```

_Request Body_
```
not needed
```

* Success Response 

_Response (200 - OK)_
```
{
    "adult": false,
    "backdrop_path": "/5uQBTwqLmUmn0tnuJOiguFjl9A9.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 10751,
            "name": "Family"
        }
    ],
    "homepage": "",
    "id": 51000,
    "imdb_id": "tt0792978",
    "original_language": "fr",
    "original_title": "Mia et le Migou",
    "overview": "One night Mia has a premonition. So after saying a few words of parting at her mother’s grave, she sets out on a cross continent journey, though mountains and jungles in search of her father, who has been trapped in a landslide at a construction site on a remote tropical lake. In the middle of the lake stands the ancient Tree of Life, watched over by innocent, bumbling forest spirits called the Migoo, who grow and change shape as they please, morphing from small childlike beings to petulant giants. The Migoo have been disrupting the construction to protect this sacred site – and now together with Mia they join in a fight to find Mia’s father and save the Tree, with the future of life on Earth hanging in the balance.",
    "popularity": 1.895,
    "poster_path": "/bTTxuvQMvsqSqpMXz33yH2WiDOH.jpg",
    "production_companies": [
        {
            "id": 8212,
            "logo_path": "/pkWt7XNwx5GssnXmTsXLKNpalaH.png",
            "name": "Folimage",
            "origin_country": "FR"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "FR",
            "name": "France"
        }
    ],
    "release_date": "2008-09-06",
    "revenue": 0,
    "runtime": 91,
    "spoken_languages": [
        {
            "english_name": "French",
            "iso_639_1": "fr",
            "name": "Français"
        }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Mia and the Migoo",
    "video": false,
    "vote_average": 7,
    "vote_count": 21
}
```

* Error Response

_Response (500 - Internal Server Error)_
```
{
  message: internal server error
  isHandled: false
}
```