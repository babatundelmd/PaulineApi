const express = require( 'express' );
const router = express.Router();


const pauline_prayers = [
    {
        Romans: {
            Chapter_1: {
                Verses: '8-10',
                Text: "8 First, I thank my God through Jesus Christ for you all, that your faith is spoken of throughout the whole world. 9 For God is my witness, whom I serve with my spirit in the gospel of his Son, that without ceasing I make mention of you always in my prayers; 10 Making request, if by any means now at length I might have a prosperous journey by the will of God to come unto you."
            },
            Chapter_10: {
                Verse: 1,
                Text: "10 Brethren, my heart's desire and prayer to God for Israel is, that they might be saved."

            },
            Chapter_15: {
                Verses: "5-6",
                Text: "5 Now the God of patience and consolation grant you to be likeminded one toward another according to Christ Jesus:  6 That ye may with one mind and one mouth glorify God, even the Father of our Lord Jesus Christ."
            },
            Chapter_15: {
                Verse: 13,
                Text: "13 Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost."
            },
            Chapter_15: {
                Verses: "30-31",
                Text: "30 Now I beseech you, brethren, for the Lord Jesus Christ's sake, and for the love of the Spirit, that ye strive together with me in your prayers to God for me; 31 That I may be delivered from them that do not believe in Judaea; and that my service which I have for Jerusalem may be accepted of the saints;"

            }

        },
        _1Corinthians: {
            _Chapter1: {
                Verses: "4-9",
                Text: `4 I thank my God always on your behalf, for the grace of God which is given you by Jesus Christ; 5 That in every thing ye are enriched by him, in all utterance, and in all knowledge;

                6 Even as the testimony of Christ was confirmed in you:

                7 So that ye come behind in no gift; waiting for the coming of our Lord Jesus Christ:

                8 Who shall also confirm you unto the end, that ye may be blameless in the day of our Lord Jesus Christ.

                9 God is faithful, by whom ye were called unto the fellowship of his Son Jesus Christ our Lord.`
            }

        },
        _2Corinthians: {
            Chapter_1: {
                Verses: "3-7",
                Text: `3 Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort;

            4 Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God.

            5 For as the sufferings of Christ abound in us, so our consolation also aboundeth by Christ.

            6 And whether we be afflicted, it is for your consolation and salvation, which is effectual in the enduring of the same sufferings which we also suffer: or whether we be comforted, it is for your consolation and salvation.

            7 And our hope of you is stedfast, knowing, that as ye are partakers of the sufferings, so shall ye be also of the consolation.`
            }
        },

        _2Corinthians: {
            Chapter_2: {
                Verse: 14,
                Text: "14 Now thanks be unto God, which always causeth us to triumph in Christ, and maketh manifest the savour of his knowledge by us in every place."
            }
        },

        _2Corinthians: {
            Chapter_13: {
                Verses: "7-9",
                Text: `7 Now I pray to God that ye do no evil; not that we should appear approved, but that ye should do that which is honest, though we be as reprobates.

                8 For we can do nothing against the truth, but for the truth.

                9 For we are glad, when we are weak, and ye are strong: and this also we wish, even your perfection.`
            }
        },
        Ephesians: {
            Chapter_1: {
                Verses: "17-23",
                Text: `17 That the God of our Lord Jesus Christ, the Father of glory, may give unto you the spirit of wisdom and revelation in the knowledge of him:

                18 The eyes of your understanding being enlightened; that ye may know what is the hope of his calling, and what the riches of the glory of his inheritance in the saints,

                19 And what is the exceeding greatness of his power to us-ward who believe, according to the working of his mighty power,

                20 Which he wrought in Christ, when he raised him from the dead, and set him at his own right hand in the heavenly places,

                21 Far above all principality, and power, and might, and dominion, and every name that is named, not only in this world, but also in that which is to come:

                22 And hath put all things under his feet, and gave him to be the head over all things to the church,

                23 Which is his body, the fulness of him that filleth all in all.`
            },

            Chapter_3: {
                Verses: "16-21",
                Text: `16 That he would grant you, according to the riches of his glory, to be strengthened with might by his Spirit in the inner man;

                17 That Christ may dwell in your hearts by faith; that ye, being rooted and grounded in love,

                18 May be able to comprehend with all saints what is the breadth, and length, and depth, and height;

                19 And to know the love of Christ, which passeth knowledge, that ye might be filled with all the fulness of God.

                20 Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us,

                21 Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen.`
            },

            Chapter_6: {
                Verses: '19-20',
                Text: `19 And for me, that utterance may be given unto me, that I may open my mouth boldly, to make known the mystery of the gospel,

                20 For which I am an ambassador in bonds: that therein I may speak boldly, as I ought to speak.`
            }
        }


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