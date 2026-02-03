# Andrew Alba

The Andrew Alba website is a Nuxtjs/Vuejs based web application designed to be used as a personal and professional blog.

This is the personal website of professional software engineer Andrew Alba.

## Requirements

- [Node.js](https://nodejs.org/en/download/)
- A Node Package Manager:
  - [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - [Pnpm](https://pnpm.io/installation)
  - [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
  - [Bun](https://bun.com/docs/installation)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

## Assets

### Color Scheme

- Crete: [#61892F]
- Atlantis: [#86C232]
- Copper: [#C26E32]
- Boston Blue: [#3286C2]
- Shark: [#222629]
- Abbey: [#474B4F]
- Nevada: [#6B6E70]

## Setup

Each folder should have its own README.md file with instruction for installing.

## Fetch ENV vars

```shell
aws ssm get-parameter --region us-east-1 \
	--name /andrewalba/app/.env.<envrironment> \
	--profile default \
	--query Parameter.Value \
	--with-decryption \
	--output text > ./.env.<envrironment>
```

If you need to make changes to the file, be sure to push the changes back to AWS. You can modify this command to push a
new revision to AWS SSM.

```shell
aws ssm put-parameter \
    --region us-east-1 \
    --name /andrewalba/app/.env.<enviornment> \
    --profile default \
    --value file://.env.<enviornment> \
--type "SecureString" \
--overwrite
```