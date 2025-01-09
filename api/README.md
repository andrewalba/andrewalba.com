# Haunted Farm / AWS Serverless API

Look at the [Serverless](https://www.serverless.com/framework/docs) to learn more.

**NOTE:** This is currently a work in progress. Do not use this until this message is removed.

## Requirements

- Node package manager (npm, pnpm, yarn, or bun)
- [AWS CLI](https://aws.amazon.com/cli/) along with AWS credentials
- [Netlify CLI](https://www.netlify.com/platform/core/cli/#install) If using Netlify

## Setup

Prior to installing you will need to have AWS CLI keys for deploying the API and SES Email templates. 
This requires an AWS account. If you do not have an AWS account, you are encouraged to create
one [here](https://aws.amazon.com/free/). 
You may also reach out to Alba Web Studio to request an AWS account and CLI credentials.

Make sure to install the dependencies (using your preferred package manager):

```bash
# pnpm
pnpm install

# npm
npm install

# yarn
yarn install

# bun
bun install
```

## Testing

If after deployment, you experience issues with ability to deliver emails successfully, 
you can use the following command line to test the SES template.
Be sure to replace the `<template-name>` with the name of the template you are testing.
Also be sure to replace the `template-data` with the data you want to test.

```
aws ses test-render-template --template-name "<template-name>" --template-data '{"foo":"bar"}'
```

```
aws ses test-render-template --template-name "andrewalba-contact_development" --template-data '{
    "name": "Uber Tester",
    "email": "andrew.alba@gmail.com",
    "phone": "6124406349",
    "message": "Velit officia duis velit. Enim culpa anim proident sint. Irure qui esse qui irure ea eu reprehenderit pariatur occaecat ullamco nulla cillum laboris proident. Consequat pariatur Lorem est voluptate ad qui magna labore ea aliquip voluptate proident aute nulla.",
    "currentYear": 2025
}'
```

To delete a template, use the following command. 
Be sure to replace the `<template-name>` with the name of the template you are deleting.

```
aws ses delete-template --template-name <template-name>
```

```
aws ses delete-template --template-name contact_production
```
