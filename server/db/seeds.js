use world;
db.dropDatabase();
db.countries.insertMany([
    {
    name:"France",
    capital:"Paris",
    language:"French"
    }

    // {
    //     name: "Ted",
    //     results: [
    //         {
    //             0: {
    //                 round: 1,
    //                 winner: true
    //             }
    //         },
    //         {
    //             1: {
    //                 round: 2,
    //                 winner: true
    //             }
    //         },
    //         {
    //             2: {
    //                 round: 3,
    //                 winner: true
    //             }
    //         },
    //         {
    //             3: {
    //                 round: 4,
    //                 winner: true
    //             }
    //         },
    //         {
    //             4: {
    //                 round: 5,
    //                 winner: false
    //             }
    //         },
    //         {
    //             5: {
    //                 round: 6,
    //                 winner: true
    //             }
    //         },
    //         {
    //             6: {
    //                 round: 7,
    //                 winner: true
    //             }
    //         },
    //         {
    //             7: {
    //                 round: 8,
    //                 winner: true
    //             }
    //         },
    //         {
    //             8: {
    //                 round: 9,
    //                 winner: false
    //             }
    //         },
    //         {
    //             9: {
    //                 round: 10,
    //                 winner: true
    //             }
    //         }
    //     ]
    // }
]);
