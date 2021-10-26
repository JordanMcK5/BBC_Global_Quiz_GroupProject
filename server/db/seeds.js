use world;
db.dropDatabase();
db["flags-quiz"].insertMany([
    {
        name: "Ted",
        results: [
            { round: 1, winner: true},
            { round: 2, winner: true},
            { round: 3, winner: true},
            { round: 4, winner: false},
            { round: 5, winner: true},
            { round: 6, winner: true},
            { round: 7, winner: false},
            { round: 8, winner: true},
            { round: 9, winner: true},
            { round: 10, winner: true}
        ]
    },
    {
        name: "Craig",
        results: [
            { round: 1, winner: true},
            { round: 2, winner: true},
            { round: 3, winner: true},
            { round: 4, winner: true},
            { round: 5, winner: true},
            { round: 6, winner: true},
            { round: 7, winner: true},
            { round: 8, winner: true},
            { round: 9, winner: true},
            { round: 10, winner: true}
        ]
    }
]);

db["capitals-quiz"].insertMany([
    {
        name: "Steve",
        results: [
            { round: 1, winner: true},
            { round: 2, winner: false},
            { round: 3, winner: true},
            { round: 4, winner: false},
            { round: 5, winner: true},
            { round: 6, winner: true},
            { round: 7, winner: false},
            { round: 8, winner: true},
            { round: 9, winner: false},
            { round: 10, winner: true}
        ]
    },
    {
        name: "Craig",
        results: [
            { round: 1, winner: true},
            { round: 2, winner: true},
            { round: 3, winner: true},
            { round: 4, winner: true},
            { round: 5, winner: true},
            { round: 6, winner: true},
            { round: 7, winner: true},
            { round: 8, winner: true},
            { round: 9, winner: true},
            { round: 10, winner: true}
        ]
    }
]);
db["national-animals-quiz"].insertMany([
    {
        name: "Morven",
        results: [
            { round: 1, winner: true},
            { round: 2, winner: false},
            { round: 3, winner: true},
            { round: 4, winner: false},
            { round: 5, winner: true},
            { round: 6, winner: true},
            { round: 7, winner: false},
            { round: 8, winner: true},
            { round: 9, winner: false},
            { round: 10, winner: true}
        ]
    },
    {
        name: "Athina",
        results: [
            { round: 1, winner: true},
            { round: 2, winner: true},
            { round: 3, winner: true},
            { round: 4, winner: true},
            { round: 5, winner: true},
            { round: 6, winner: true},
            { round: 7, winner: true},
            { round: 8, winner: true},
            { round: 9, winner: true},
            { round: 10, winner: true}
        ]
    }
]);
