**Form Live : [https://5f7o2dd6.forms.app/bit-code-task-form].**
**Webhook deplyed : [https://bitcode-form-handler.vercel.app/api/v1/form-handler/webhook]**

**how to run the webhook / express server:**
clone the github repo. create .env file. add PORT=5000 and JWT_123_FORM_BUIDLER="The JWT retrieved from the 123 form builder developer". after that run "npm run dev". note: you'll need nodemon installed.

**Work Flow**
I have added a custom webhook to the form so anyone submits a form, the webhook will catch the data and create a new form at the [https://www.123formbuilder.com/] through API. the 123formbuilder API requires a jwt token. the token will be loaded from the .env file. it has a short validity. so in order to get the API working, we will have to retrieve a jwt token by visiting [https://www.123formbuilder.com/developer/api-v2-forms/#/Login/post_token]. after that, replace the new JWT_123_FORM_BUIDLER in the .env file. deploy the express server. replace the webhook URL if backend URL is changed. after that submit a form and visit your 123formbuilder account and see the result. the workflow is forms app > webhook > 123form builder.
