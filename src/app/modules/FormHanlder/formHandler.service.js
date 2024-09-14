import axios from "axios";
import config from "../../config/index.js";

const createForm = async (payload) => {
  // turning data into formData recieved from forms.app through webhook
  const formData = new FormData();
  formData.append("JWT", config.jwt_123_form_builder);
  formData.append("name", payload?.answer?.answers[0]?.t || "Test");
  formData.append(
    "active",
    payload?.answer?.answers[1]?.c[0]?.t === "active" ? 0 : 3
  );

  // creating into 123FormBuilder
  const result = await axios.post(
    `https://api.123formbuilder.com/v2/forms`,
    formData
  );

  return result;
};

export const FormHandlerService = {
  createForm,
};
