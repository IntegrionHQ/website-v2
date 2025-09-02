import formik from "formik";
import * as Yup from "yup";
import Form from "./form";
import Input from "../Input";
import SelectInput from "../SelectInput";
import TextArea from "../TextArea";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
export const BetaModal = ({ onClick }: { onClick: () => void }) => {
  const betaValidationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    workEmail: Yup.string()
      .email("Invalid email address")
      .required("Work email is required"),
    company: Yup.string(),
    role: Yup.string().required("Role is required"),
    teamSize: Yup.string().required("Team size is required"),
    primaryStack: Yup.string().required("Tech stack is required"),
    biggestPainPoint: Yup.string().required(
      "Please tell us so we can address it , we would love to😁",
    ),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="fixed  inset-0 bg-black/50 z-50 flex flex-col justify-center items-center">
      <div className="bg-white w-1/2 rounded-sm flex flex-col justify-center items-start p-5 gap-5">
        <div className="flex justify-between items-start w-full">
          <div>
            <h1 className="font-bold text-2xl tracking-wide">
              Get Early Access
            </h1>
            <p className="text-base font-normal text-gray-500">
              Be one of the first to try out Integrion in beta
            </p>
          </div>
          <div>
            <XMarkIcon
              className=" size-8 hover:bg-gray-200 cursor-pointer text-gray-400 border border-gray-200 rounded-sm  focus:ring-black  focus:ring-2"
              onClick={onClick}
            />
          </div>
        </div>

        <Form
          initialValues={{
            fullName: "",
            workEmail: "",
            company: "",
            role: "",
            teamSize: "",
            primaryStack: "",
            biggestPainPoint: "",
          }}
          validationSchema={betaValidationSchema}
          className="space-y-4 w-full"
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  placeholder="James Doe"
                  label="Full Name"
                  required
                  error={
                    formik.touched.fullName ? formik.errors.fullName : null
                  }
                />
                <Input
                  name="workEmail"
                  value={formik.values.workEmail}
                  onChange={formik.handleChange}
                  placeholder="name@comapny.domain"
                  label="Work Email"
                  required
                  error={
                    formik.touched.workEmail ? formik.errors.workEmail : null
                  }
                />
                <Input
                  name="company"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  placeholder="Integrion LLC"
                  label="Company"
                  error={formik.touched.company ? formik.errors.company : null}
                />
                <SelectInput
                  name="company"
                  options={[
                    {
                      id: "backend-engineer",
                      label: "Backend Engineer",
                      value: "backend-engineer",
                    },
                    {
                      id: "fullstack-engineer",
                      label: "Fullstack Engineer",
                      value: "fullstack-engineer",
                    },
                    {
                      id: "qa-engineer",
                      label: "QA Engineer",
                      value: "qa-engineer",
                    },
                    {
                      id: "product-manager",
                      label: "Product Manager",
                      value: "product-manager",
                    },
                  ]}
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  placeholder="Select a role"
                  label="Role"
                  error={formik.touched.role ? formik.errors.role : null}
                />
                <SelectInput
                  name="team-size"
                  options={[
                    {
                      id: "1",
                      label: "1 (Solo Developer)",
                      value: "1-solo-developer",
                    },
                    {
                      id: "2-5",
                      label: "2-5 (Small Team)",
                      value: "2-5-small-team",
                    },
                    {
                      id: "6-15",
                      label: "6-15 (Growing Team)",
                      value: "6-15-growing-team",
                    },
                    {
                      id: "16-50",
                      label: "16-50 (Mid-sized Team)",
                      value: "16-50-mid-sized-team",
                    },
                    {
                      id: "51-200",
                      label: "51-200 (Large Team)",
                      value: "51-200-large-team",
                    },
                    {
                      id: "200+ (Enterprise)",
                      label: "200+ (Enterprise)",
                      value: "200+",
                    },
                  ]}
                  value={formik.values.teamSize}
                  onChange={formik.handleChange}
                  placeholder="How large is your team?"
                  label="Team Size"
                  error={
                    formik.touched.teamSize ? formik.errors.teamSize : null
                  }
                />
                <Input
                  name="primaryStack"
                  value={formik.values.primaryStack}
                  onChange={formik.handleChange}
                  placeholder="React"
                  label="Primary Stack"
                  error={
                    formik.touched.primaryStack
                      ? formik.errors.primaryStack
                      : null
                  }
                />
                <div className="col-span-2">
                  <TextArea
                    name="biggestPainPoint"
                    value={formik.values.biggestPainPoint}
                    onChange={formik.handleChange}
                    placeholder="e.g. flaky tests, infra downtime, debugging latency, scaling reliability, other"
                    label="Biggest Pain Point"
                    required
                    error={
                      formik.touched.biggestPainPoint
                        ? formik.errors.biggestPainPoint
                        : null
                    }
                  />
                </div>
              </div>
              <button className="border border-black text-black text-sm rounded-sm px-4 py-3 hover:bg-black hover:text-white cursor-pointer w-full mt-3 flex justify-between items-center">
                Secure your spot
                <ArrowRightIcon className="size-5" />
              </button>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};
