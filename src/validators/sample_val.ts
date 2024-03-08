//Import Statement
import Ajv from "ajv";

//Ajv Instance
const ajv = new Ajv();

//Schema
const sceneSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    picture: { type: ["string", "null"] },
    description: { type: ["string", "null"] },
    release_date: { type: ["string", "null"] },
    release_year: { type: ["string", "null"] },
  },
  required: ["name"],
  additionalProperties: false,
};

/* Validator Functions */
function validateScene(body: any) {
  //Validator
  const sceneValidator = ajv.compile(sceneSchema);
  //Validate
  const valid = sceneValidator(body);
  //Function Returns
  if (valid) {
    return true;
  }
  if (!valid) {
    return false;
  }
}
/* End Validator Functions */

export { validateScene };
