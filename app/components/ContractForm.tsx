import { useForm } from "react-hook-form";

type FormData = {
  projectName: string;
  projectDescription: string;
  deliverables: string;
  paymentAmount: number;
  paymentSchedule: string;
  startDate: string;
  endDate: string;
  intellectualProperty: boolean;
  confidentialityAgreement: boolean;
  terminationClause: boolean;
};

const ContractForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission, such as sending it to an API
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Freelance Contract Form</h2>

      {/* Form Submission */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Project Name */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Project Name</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            {...register("projectName", { required: "Project name is required" })}
            placeholder="Enter project name"
          />
          {errors.projectName && <p className="text-red-600 text-sm">{errors.projectName.message}</p>}
        </div>

        {/* Project Description */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Project Description</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            {...register("projectDescription", { required: "Project description is required" })}
            placeholder="Describe the project"
          />
          {errors.projectDescription && <p className="text-red-600 text-sm">{errors.projectDescription.message}</p>}
        </div>

        {/* Deliverables */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Deliverables</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            {...register("deliverables", { required: "Deliverables are required" })}
            placeholder="List the deliverables"
          />
          {errors.deliverables && <p className="text-red-600 text-sm">{errors.deliverables.message}</p>}
        </div>

        {/* Payment Amount */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Payment Amount</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            {...register("paymentAmount", { required: "Payment amount is required" })}
            placeholder="Enter the total payment"
          />
          {errors.paymentAmount && <p className="text-red-600 text-sm">{errors.paymentAmount.message}</p>}
        </div>

        {/* Payment Schedule */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Payment Schedule</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            {...register("paymentSchedule", { required: "Payment schedule is required" })}
          >
            <option value="">Select payment schedule</option>
            <option value="Upon Completion">Upon Completion</option>
            <option value="50% Upfront, 50% After Completion">50% Upfront, 50% After Completion</option>
            <option value="Milestone Payments">Milestone Payments</option>
          </select>
          {errors.paymentSchedule && <p className="text-red-600 text-sm">{errors.paymentSchedule.message}</p>}
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Start Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            {...register("startDate", { required: "Start date is required" })}
          />
          {errors.startDate && <p className="text-red-600 text-sm">{errors.startDate.message}</p>}
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">End Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            {...register("endDate", { required: "End date is required" })}
          />
          {errors.endDate && <p className="text-red-600 text-sm">{errors.endDate.message}</p>}
        </div>

        {/* Intellectual Property Agreement */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Intellectual Property</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              {...register("intellectualProperty", { required: "Intellectual property agreement is required" })}
            />
            <span>Agree to transfer intellectual property rights</span>
          </div>
          {errors.intellectualProperty && <p className="text-red-600 text-sm">{errors.intellectualProperty.message}</p>}
        </div>

        {/* Confidentiality Agreement */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Confidentiality Agreement</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              {...register("confidentialityAgreement", { required: "Confidentiality agreement is required" })}
            />
            <span>Agree to maintain confidentiality</span>
          </div>
          {errors.confidentialityAgreement && <p className="text-red-600 text-sm">{errors.confidentialityAgreement.message}</p>}
        </div>

        {/* Termination Clause */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Termination Clause</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              {...register("terminationClause", { required: "Termination clause agreement is required" })}
            />
            <span>Agree to the termination clause</span>
          </div>
          {errors.terminationClause && <p className="text-red-600 text-sm">{errors.terminationClause.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Contract
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContractForm;

