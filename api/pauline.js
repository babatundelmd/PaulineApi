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
        },
        Philippians: {
            Chapter_1: {
                Verses: "3-6",
                Text: `3 I thank my God upon every remembrance of you,

                4 Always in every prayer of mine for you all making request with joy,

                5 For your fellowship in the gospel from the first day until now;

                6 Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:`
            },
            Chapter_1: {
                Verses: "9-11",
                Text: `9 And this I pray, that your love may abound yet more and more in knowledge and in all judgment;

                10 That ye may approve things that are excellent; that ye may be sincere and without offence till the day of Christ.

                11 Being filled with the fruits of righteousness, which are by Jesus Christ, unto the glory and praise of God.`
            },
            Chapter_4: {
                Verses: "6-7",
                Text: `6 Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.

                7 And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.`
            }
        },
        Colossians: {
            Chapter_1: {
                Verses: "9-11",
                Text: `9 For this cause we also, since the day we heard it, do not cease to pray for you, and to desire that ye might be filled with the knowledge of his will in all wisdom and spiritual understanding;

                10 That ye might walk worthy of the Lord unto all pleasing, being fruitful in every good work, and increasing in the knowledge of God;

                11 Strengthened with all might, according to his glorious power, unto all patience and longsuffering with joyfulness;`
            },
            Chapter_4: {
                Verses: "2-4",
                Text: `2 Continue in prayer, and watch in the same with thanksgiving;

                3 Withal praying also for us, that God would open unto us a door of utterance, to speak the mystery of Christ, for which I am also in bonds:

                4 That I may make it manifest, as I ought to speak.`
            }
        },
        _1Thessalonians: {
            Chapter_1: {
                Verses: "2-3",
                Text: `2 We give thanks to God always for you all, making mention of you in our prayers;

                3 Remembering without ceasing your work of faith, and labour of love, and patience of hope in our Lord Jesus Christ, in the sight of God and our Father;`
            },
            Chapter_3: {
                Verses: "9-13",
                Text: `9 For what thanks can we render to God again for you, for all the joy wherewith we joy for your sakes before our God;

                10 Night and day praying exceedingly that we might see your face, and might perfect that which is lacking in your faith?

                11 Now God himself and our Father, and our Lord Jesus Christ, direct our way unto you.

                12 And the Lord make you to increase and abound in love one toward another, and toward all men, even as we do toward you:

                13 To the end he may stablish your hearts unblameable in holiness before God, even our Father, at the coming of our Lord Jesus Christ with all his saints.`
            },
            _2Thessalonians: {
                Chapter_1: {
                    Verses: "11-12",
                    Text: `11 Wherefore also we pray always for you, that our God would count you worthy of this calling, and fulfil all the good pleasure of his goodness, and the work of faith with power:

                    12 That the name of our Lord Jesus Christ may be glorified in you, and ye in him, according to the grace of our God and the Lord Jesus Christ.`
                },
                Chapter_2: {
                    Verses: "16-17",
                    Text: `16 Now our Lord Jesus Christ himself, and God, even our Father, which hath loved us, and hath given us everlasting consolation and good hope through grace,

                    17 Comfort your hearts, and stablish you in every good word and work.`
                },
                Chapter_3: {
                    Verses: "1-5",
                    Text: `1 Finally, brethren, pray for us, that the word of the Lord may have free course, and be glorified, even as it is with you:

                    2 And that we may be delivered from unreasonable and wicked men: for all men have not faith.

                    3 But the Lord is faithful, who shall stablish you, and keep you from evil.

                    4 And we have confidence in the Lord touching you, that ye both do and will do the things which we command you.

                    5 And the Lord direct your hearts into the love of God, and into the patient waiting for Christ.`
                },

                Chapter_3: {
                    Verse: 16,
                    Text: `16 Now the Lord of peace himself give you peace always by all means. The Lord be with you all.`
                }
            },

            _1Timothy: {
                Chapter_2: {
                    Verses: "1-3",
                    Text: `I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men;

                    2 For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty.

                    3 For this is good and acceptable in the sight of God our Saviour;`
                }
            },
            _2Timothy: {
                Chapter_1: {
                    Verses: "16-18",
                    Text: `16 The Lord give mercy unto the house of Onesiphorus; for he oft refreshed me, and was not ashamed of my chain:

                    17 But, when he was in Rome, he sought me out very diligently, and found me.

                    18 The Lord grant unto him that he may find mercy of the Lord in that day: and in how many things he ministered unto me at Ephesus, thou knowest very well.`
                }
            },
            Philemon: {
                Chapter_1: {
                    Verse: "4-6",
                    Text: `4 I thank my God, making mention of thee always in my prayers,

                    5 Hearing of thy love and faith, which thou hast toward the Lord Jesus, and toward all saints;

                    6 That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus.`
                }
            }


        }


    }
]

router.get( '/', ( request, response ) =>
{
    response.send( pauline_prayers );
} );




module.exports = router;