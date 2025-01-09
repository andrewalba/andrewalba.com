"use strict"

const { SES } = require("@aws-sdk/client-ses");
const sesClient = new SES({
    // The key apiVersion is no longer supported in v3, and can be removed.
    // @deprecated The client uses the "latest" apiVersion.
    apiVersion: "2010-12-01",
})

module.exports.contactForm = (event, context, callback) => {
    const data = JSON.parse(event.body)
    let response = {
        statusCode: 500,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        }
    }

    try {
        data.currentYear = new Date().getFullYear()
        data.subject = `Submission from AndrewAlba.com Contact Form`

        sendContactFormToAndrewAlba(data)

        // create a response
        response['statusCode'] = 200
        response['body'] = JSON.stringify({
            success: true
        })
    } catch (err) {
        console.error(err)
        response['body'] = JSON.stringify({
            success: false,
            message: err.message
        })
    }

    callback(null, response)
}

const sendContactFormToAndrewAlba = (data) => {
    // massage data
    sesClient
        .sendTemplatedEmail({
            Destination: {
                ToAddresses: process.env.TO_EMAIL.split(","),
            },
            Source: process.env.SOURCE_EMAIL,
            Template: `andrewalba-contact_${process.env.STAGE}`,
            TemplateData: JSON.stringify(data),
            ReplyToAddresses: [process.env.REPLY_TO_EMAIL],
        })
        .then(function () {
            console.log(`sendContactFormToAndrewAlba email queued: ${JSON.stringify(data)}`)
        })
        .catch(function (err) {
            console.error(err, err.stack)
        })
}
