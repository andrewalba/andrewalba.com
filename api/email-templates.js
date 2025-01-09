const path = require("path");

const templateList = [
    {
        templateId: "andrewalba-contact",
        templateSubject: "Andrew Alba - Contact Form",
    }
];

templateList.reduce((acc, templateInfo) => {
    const { templateId } = templateInfo;
    if (acc[templateId] === 1) {
        throw new Error(
            `Error: Duplicate SES template id "${templateId}", they should be unique`
        );
    }
    acc[templateId] = 1;
    return acc;
}, {});

/**
 * @param {Object} serverless - Serverless instance
 * @param {Object} _options - runtime options
 * @returns {Promise<{name: string, subject: string, html: string, text}[]>}
 */
module.exports = async (serverless, _options) => {
    // You can load template configuration from filesystem using serverless object + runtime options
    // or from any other source like database or API

    const sesEmailTemplates = templateList.map((templateInfo) => {
        const { templateId, templateSubject } = templateInfo;
        const templatePathHtml = path.join(
            __dirname,
            `../emails/dist/${templateId}.html`
        );

        return {
            name: templateId,
            subject: templateSubject,
            html: serverless.utils.readFileSync(templatePathHtml),
        };
    });
    return sesEmailTemplates;
};
