import { educationData } from "@/constants/data";

function Education() {
  return (
    <div id="education" className="my-20">
      <h1 className="text-blue-600 my-10 text-[18px] font-semibold">
        Education :{" "}
      </h1>
      <div className="mt-20" >
        <div className="w-full max-w-3xl mx-auto">
          <div className="-my-6">
            <div className="">
              {educationData?.map((ele, index) => (
                <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      {ele?.time}
                    </time>
                    <div className="sm:text-xl  font-bold text-slate-900">
                      {ele?.name}
                    </div>
                  </div>

                  <div className="text-slate-500 text-sm sm:text-[1rem]  ">{ele?.institute}</div>
                  <div className="text-slate-500 text-sm">
                    <span className=" text-sm sm:text-base   me-2">Grade</span> {ele?.marks}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
