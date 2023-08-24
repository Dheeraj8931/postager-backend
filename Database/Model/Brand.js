var mong = require("../Connection");

const crypto = require("crypto");
const Brandschema = new mong.Schema({

    userid: String,
    // plan: {
    //     type: [],
    //     default: 1,
    // },
    plan:
    {
        planId: {
            type: String,
            required: true,
            default: "1",
        },
        planName: {
            type: String,
            default: "Free",
            required: true
        },
        planPrice: {
            type: String,
            default: "0.00",
            required: true
        },
        planExpiry: {
            type: Date,
            required: true,
            default: '1-1-2040',
        },
    }
    ,

    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
    name: String,
    facebookcredential: {
        type: Map,
        of: String
    },
    fbpicture: String,
    instagramcredential: {
        type: Map,
        of: String
    },
    twitterAccessToken: String,
    twitterAccessSecret: String,
    linkedinid: String,
    linkedintoken: String,
    image: String,
    ptcredential: {
        type: Map,
        of: String
    },
    ptpicture: String,

})

const Brands = mong.model("postagerbrand", Brandschema);
module.exports = Brands