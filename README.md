# Form Live : [https://5f7o2dd6.forms.app/bit-code-task-form].

# Webhook deplyed : [https://bitcode-form-handler.vercel.app/api/v1/form-handler/webhook] - /POST

# how to run the webhook / express server locally:

1. clone the github repo.
2. create .env file. add `PORT=5000` and `JWT_123_FORM_BUIDLER="The JWT retrieved from the 123 form builder developer site"`.
3. run `npm install` to install all the required packages.
4. after that run "npm run dev".

note: you'll need nodemon installed, the local URL of the webhook will not work on forms.app, so I have deployed it on vercel and shared it at the top.

# Work Flow

I have added a custom webhook to the form so anyone submits a form, the webhook will catch the data and create a new form at the [https://www.123formbuilder.com/] through API. the 123formbuilder API requires a jwt token. the token will be loaded from the .env file. it has a short validity of `1d`. so in order to get the API working,

1. we will have to retrieve a jwt token by visiting [https://www.123formbuilder.com/developer/api-v2-forms/#/Login/post_token].
2. after that, replace the new JWT_123_FORM_BUIDLER in the .env file.
3. deploy the express server.
4. replace the webhook URL if backend URL is changed.

after that submit a form from the forms app website and visit your 123formbuilder account and see the result.
the workflow is forms app > webhook > 123form builder.
