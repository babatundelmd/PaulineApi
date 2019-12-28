const express = require( 'express' );
const router = express.Router();


const pauline_prayers = [
    {
        Romans: {
            Chapter1: {
                Verses: '8-10',
                Text: "First, I thank my God through Jesus Christ for all of you, because your faith is being reported all over the world. God, whom I serve with my whole heart in preaching the gospel of his Son, is my witness how constantly I remember you in my prayers at all times; and I pray that now at last by God’s will the way may be opened for me to come to you."
            },
            Chapter10: {
                Verses: 1,
                Text: "Brothers, my heart’s desire and prayer to God for the Israelites is that they may be saved."

            }

        },

    }

    // {
    //     Book: "Romans",
    //     Chapter: 1,
    //     Verses: '8 - 10',
    //     Text: "First, I thank my God through Jesus Christ for all of you, because your faith is being reported all over the world. God, whom I serve with my whole heart in preaching the gospel of his Son, is my witness how constantly I remember you in my prayers at all times; and I pray that now at last by God’s will the way may be opened for me to come to you."

    // },
    // {
    //     Book: "Romans",
    //     Chapter: 10,
    //     Verses: 1,
    //     Text: "Brothers, my heart’s desire and prayer to God for the Israelites is that they may be saved."

    // }

]

router.get( '/', ( request, response ) =>
{
    response.send( pauline_prayers );
} );




module.exports = router;