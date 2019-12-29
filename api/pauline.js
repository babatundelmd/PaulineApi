const express = require( 'express' );
const router = express.Router();


const pauline_prayers = [
    {
        Romans: {
            Chapter_1: {
                Verses: '8-10',
                Text: "8 First, I thank my God through Jesus Christ for all of you, because your faith is proclaimed in all the world. 9 For God is my witness, whom I serve with my spirit in the gospel of his Son, that without ceasing I mention you 10 always in my prayers, asking that somehow by God’s will I may now at last succeed in coming to you."
            },
            Chapter_10: {
                Verse: 1,
                Text: "10 Brothers, my heart’s desire and prayer to God for the Israelites is that they may be saved."

            },
            Chapter_15: {
                Verses: "5-6",
                Text: "5 May the God of endurance and encouragement grant you to live in such harmony with one another, in accord with Christ Jesus, 6 that together you may with one voice glorify the God and Father of our Lord Jesus Christ."
            },
            Chapter_15: {
                Verse: 13,
                Text: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope."
            },
            Chapter_15: {
                Verses: "30-31",
                Text: "30 I appeal to you, brothers, by our Lord Jesus Christ and by the love of the Spirit, to strive together with me in your prayers to God on my behalf, 31 that I may be delivered from the unbelievers in Judea, and that my service for Jerusalem may be acceptable to the saints, 32 so that by God’s will I may come to you with joy and be refreshed in your company. 33 May the God of peace be with you all. Amen."

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