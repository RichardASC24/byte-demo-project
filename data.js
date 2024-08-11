let places = {
    "restaurants": {
        "Bronx": [
            {
                "name": "Halalbee's",
                "address": "1957 Westchester Ave, Bronx, NY 10462",
                "types": {
                    "glutenFree": true,
                    "vegan": false,
                    "petFriendly": true,
                    "halal": true,
                    "reviews": "3.7",
                    "price-range": "$8-$15"
                    
                },
                "ethnicity": "Middle Eastern",
                "foodType": "Meats"
            },
            {
                "name": "King Grill",
                "address": "855 E 169th St, Bronx, NY 10452",
                "types": {
                    "vegan": false,
                    "petFriendly": true,
                    "reviews": "3.7",
                    "price-range": "$8-$15"
                    
                },
                "ethnicity": "Latin",
                "foodType": "Tacos"
            },
            {
                "name": "Golden Krust Caribbean Restaurant",
                "address": "358 E 149th St, Bronx, NY 10455",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "2.5",
                    "price-range": "$1-$12"
                    
                },
                "ethnicity": "Caribbean",
                "foodType": "Meats"
            },
            {
                "name": "Parrilla Latina",
                "address": "2501 Webster Ave, Bronx, NY 10458",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "2",
                    "price-range": "$8-$40"
                    
                },
                "ethnicity": "Caribbean",
                "foodType": "Meats"
            },
            {
                "name": "The Healthy Kitchen",
                "address": "1135C Morris Park Ave, Bronx, NY 10461",
                "types": {
                    "vegan": true,
                    "petFriendly": false,
                    "reviews": "3",
                    "price-range": "$5-$20"
                    
                },
                "ethnicity": "American",
                "foodType": "Burgers"
            }
        ],
        "Queens": [
            {
                "name": "Urban Vegan Roots",
                "address": "34-47 31st St, Astoria, NY 11106",
                "types": {
                    "vegan": true,
                    "petFriendly": true,
                    "reviews": "5",
                    "price-range": "$3-$27"
                    
                },
                "ethnicity": "American",
                "foodType": "Burgers"
            },
            {
                "name": "King Wah",
                "address": "69-11 Northern Blvd, Woodside, NY 11377",
                "types": {
                    "vegan": false,
                    "petFriendly": true,
                    "reviews": "4.5",
                    "price-range": "$1-$10"
                    
                },
                "ethnicity": "Asian",
                "foodType": "Noodles"
            },
            {
                "name": "Peace & Plants Restaurant",
                "address": "5317 Broadway, Woodside, NY 11377",
                "types": {
                    "vegan": true,
                    "petFriendly": false,
                    "reviews": "4.5",
                    "price-range": "$5-$14"
                    
                },
                "ethnicity": "American",
                "foodType": "Burgers"
            },
            {
                "name": "The COOP",
                "address": "133-42 39th Ave #103, Queens, NY 11354",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "4.5",
                    "price-range":"$1-$38"
                    
                },
                "ethnicity": "Asian",
                "foodType": "Fish"
            },
            {
                "name": "Lime and Salt Restaurant Bar",
                "address": "98-102 Queens Blvd, Rego Park, NY 11374",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "4.1",
                    "price-range":"$7-$35"
                    
                },
                "ethnicity": "Latin",
                "foodType": "Tacos"
            }
        ],
        "Brooklyn": [
            {
                "name": "Dynasty Chinese Restaurant",
                "address": "1669 Flatbush Ave, Brooklyn, NY 11210",
                "types": {
                    "vegan": false,
                    "petFriendly": true,
                    "reviews": "4",
                    "price-range":"$2-$16"
                    
                },
                "ethnicity": "Asian",
                "foodType": "Noodles"
            },
            {
                "name": "New Ruan's Restaurant",
                "address": "1955 86th St, Brooklyn, NY 11214",
                "types": {
                    "vegan": false,
                    "petFriendly": true,
                    "reviews": "4",
                    "price-range":"$9-$12"
                    
                },
                "ethnicity": "Asian",
                "foodType": "Noodles"
            },
            {
                "name": "Little Istanbul Restaurant",
                "address": "2007 Avenue U, Brooklyn, NY 11229",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "5",
                    "price-range": "$7-$35"
                    
                },
                "ethnicity": "European",
                "foodType": "Meats"
            },
            {
                "name": "Terrace Restaurant & Bakery",
                "address": "280 5th Ave, Brooklyn, NY 11215",
                "types": {
                    "vegan": false,
                    "petFriendly": true,
                    "reviews": "5",
                    "price-range": "$9-$20"
                    
                },
                "ethnicity": "Latin",
                "foodType": "Tacos"
            },
            {
                "name": "Gino's Pizza",
                "address": "548 Flatbush Ave, Brooklyn, NY 11225",
                "types": {
                    "vegan": false,
                    "petFriendly": true,
                    "reviews": "4",
                    "price-range":"$2-$30"
                    
                },
                "ethnicity": "European",
                "foodType": "Pizza"
            }
        ],
        "Manhattan": [
            {
                "name": "Tio Pepe",
                "address": "168 West 4th Street, New York, NY 10014",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "4",
                    "price-range": "$5-$25"
                    
                },
                "ethnicity": "Latin",
                "foodType": "Tacos"
            },
            {
                "name": "Trinity Place",
                "address": "115 Broadway, New York, NY 10006",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "4.5",
                    "price-range":"$7-$26"
                    
                },
                "ethnicity": "American",
                "foodType": "Burgers"
            },
            {
                "name": "Wild",
                "address": "535 Hudson St, New York, NY 10014",
                "types": {
                    "vegan": true,
                    "petFriendly": true,
                    "reviews": "4",
                    "price-range":"$6-$26"
                },
                "ethnicity": "American",
                "foodType": "Burgers"
            },
            {
                "name": "Carmine's",
                "address": "200 W 44th St, New York, NY 10036",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "4.5",
                    "price-range":"$7-$39"
                },
                "ethnicity": "European",
                "foodType": "Pizza"
            },
            {
                "name": "53",
                "address": "53 W 53rd St, New York, NY 10019",
                "types": {
                    "vegan": false,
                    "petFriendly": false,
                    "reviews": "4.5",
                    "price-range": "$14-$78"
                    
                },
                "ethnicity": "Asian",
                "foodType": "Fish"
            }
        ]
    }
};