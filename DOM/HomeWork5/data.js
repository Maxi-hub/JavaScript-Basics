const usersData = {
    "users": [
        {
            "id": 1,
            "firstName": "Emily",
            "lastName": "Johnson",
            "maidenName": "Smith",
            "age": 28,
            "gender": "female",
            "email": "emily.johnson@x.dummyjson.com",
            "phone": "+81 965-431-3024",
            "username": "emilys",
            "birthDate": "1996-5-30",
            "image": "https://dummyjson.com/icon/emilys/128",
            "hair": {
                "color": "Brown",
                "type": "Curly"
            },
            "role": "user"
        },
        {
            "id": 2,
            "firstName": "Michael",
            "lastName": "Williams",
            "maidenName": "",
            "age": 35,
            "gender": "male",
            "email": "michael.williams@x.dummyjson.com",
            "phone": "+49 258-627-6644",
            "username": "michaelw",
            "birthDate": "1989-8-10",
            "image": "https://dummyjson.com/icon/michaelw/128",
            "hair": {
                "color": "Green",
                "type": "Straight"
            },
            "role": "admin"
        },
        {
            "id": 3,
            "firstName": "Sophia",
            "lastName": "Brown",
            "maidenName": "",
            "age": 42,
            "gender": "female",
            "email": "sophia.brown@x.dummyjson.com",
            "phone": "+81 210-652-2785",
            "username": "sophiab",
            "birthDate": "1982-11-6",
            "image": "https://dummyjson.com/icon/sophiab/128",
            "hair": {
                "color": "White",
                "type": "Wavy"
            },
            "role": "user"
        },
        {
            "id": 4,
            "firstName": "James",
            "lastName": "Davis",
            "maidenName": "",
            "age": 45,
            "gender": "male",
            "email": "james.davis@x.dummyjson.com",
            "phone": "+49 614-958-9364",
            "username": "jamesd",
            "birthDate": "1979-5-4",
            "image": "https://dummyjson.com/icon/jamesd/128",
            "hair": {
                "color": "Blonde",
                "type": "Straight"
            },
            "role": "user"
        },
        {
            "id": 5,
            "firstName": "Emma",
            "lastName": "Miller",
            "maidenName": "Johnson",
            "age": 30,
            "gender": "female",
            "email": "emma.miller@x.dummyjson.com",
            "phone": "+91 759-776-1614",
            "username": "emmaj",
            "birthDate": "1994-6-13",
            "image": "https://dummyjson.com/icon/emmaj/128",
            "hair": {
                "color": "White",
                "type": "Straight"
            },
            "role": "user"
        }
    ],
}

// console.log(usersData);

const stringData = JSON.stringify(usersData);
// console.log(stringData);

const parseData = JSON.parse(stringData);
console.log(parseData);
